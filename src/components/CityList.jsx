import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

import { useCities } from "../hooks/useCities";

function CityList() {
  const { cities, isLoading } = useCities();
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const activeCityId = params.get("activeCityId");

  const handleCityClick = (id) => {
    navigate(`?activeCityId=${id}`);
  };

  if (isLoading) return <Spinner />;

  if (cities.length === 0 || cities === "undefined")
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities?.map((city, index) => (
        <CityItem
          city={city}
          key={index}
          isActive={Number(activeCityId) === city.id}
          onClick={() => handleCityClick(city.id)}
        />
      ))}
    </ul>
  );
}

export default CityList;
