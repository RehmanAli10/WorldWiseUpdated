import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import ApplicationLogo from "../public/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={ApplicationLogo} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
