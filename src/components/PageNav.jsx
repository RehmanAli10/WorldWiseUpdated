import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { useClickOutside } from "../hooks/useClickOutside";

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref } = useClickOutside(handleCloseMenu);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 1000);
    } else {
      setIsMenuOpen(true);
    }
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
    setIsAnimating(false);
  }

  return (
    <nav className={styles.nav} ref={ref}>
      <Logo />
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen && !isAnimating ? (
          <div className={styles.crossiconContainer}>
            <FaTimes />
          </div>
        ) : (
          <FaBars className={styles.hamburgerIcon} />
        )}
      </div>
      <ul
        className={`${styles.menu} ${
          isMenuOpen ? (isAnimating ? styles.menuClose : styles.menuOpen) : ""
        }`}
      >
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
