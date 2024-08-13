import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className={styles.crossiconContainer}>
            <FaTimes />
          </div>
        ) : (
          <FaBars className={styles.hamburgerIcon} />
        )}
      </div>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
