import { Link, useNavigate } from "react-router-dom";
import styles from "./CityItem.module.css";
import { formatDate } from "../utils/helpers";
import { useDeleteCity } from "../hooks/useDeleteCity";

function CityItem({ city, isActive, onClick }) {
  const { cityName, emoji, date, id, position } = city;
  const { deleteCity } = useDeleteCity();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    onClick(id);
    navigate(`${id}?lat=${position.lat}&lng=${position.lng}`);
  };

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          isActive ? styles["cityItem--active"] : ""
        }`}
        onClick={handleClick}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>

        <button
          className={styles.deleteBtn}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteCity(id);
          }}
        >
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
