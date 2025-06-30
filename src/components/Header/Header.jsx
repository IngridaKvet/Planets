import styles from "./header.module.scss";
import Navigation from "../Navigation/Navigation";
import hamburgerIcon from '../../assets/icon-hamburger.svg';
import { useState } from "react";


const Header = () => {

     const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>THE PLANETS</div>
      <Navigation/>
      <button
        className={styles.hamburger}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <img src={hamburgerIcon} alt="Menu" />
      </button>
    </header>
  );
};

export default Header;
