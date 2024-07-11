import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Button from "./Button";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import Message from "./Message";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import { useCreateCity } from "../hooks/useCreateCity";

import { convertToEmoji } from "../utils/helpers";
import { useUser } from "../hooks/useUser";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const naviagte = useNavigate();
  const { isCreating, creatingCity } = useCreateCity();
  const [isLoadingGeocoding, setisLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [lat, lng] = useUrlPosition();
  const [geoCodingError, setGeoCodingError] = useState("");

  const { user } = useUser();

  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchCityData() {
        try {
          setisLoadingGeocoding(true);
          setGeoCodingError("");
          const resp = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          if (!resp.ok)
            throw new Error("Something went wrong fetching city data");

          const data = await resp.json();

          if (!data.countryName)
            throw new Error(
              " That doesn't seem to be a city. Click somewhere else 😊"
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeoCodingError(err.message);
        } finally {
          setisLoadingGeocoding(false);
        }
      }

      fetchCityData();
    },
    [lat, lng]
  );

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
      userId: user?.id,
    };
    creatingCity(newCity);
    naviagte("/app/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng)
    return <Message message={"Start by clicking somewhere on the map"} />;

  if (geoCodingError) return <Message message={geoCodingError} />;

  return (
    <form
      className={`${styles.form} ${isCreating ? styles.loading : ""}`}
      onSubmit={handleFormSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <ReactDatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
