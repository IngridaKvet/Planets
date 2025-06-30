import styles from "./header.module.scss";
import Navigation from "../Navigation/Navigation";
import hamburgerIcon from "../../assets/icon-hamburger.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
      <div className={styles.logo}>THE PLANETS</div>
      <Navigation />
      <button
        className={styles.hamburger}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <img src={hamburgerIcon} alt="Menu" />
      </button>

      </div>

        {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
};

export default Header;
