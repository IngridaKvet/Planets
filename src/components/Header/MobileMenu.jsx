import styles from "./mobileMenu.module.scss";
import arrowIcon from "../../assets/icon-chevron.svg";

import { NavLink } from "react-router";

const PLANETS = [
  { name: "Mercury", color: "#DEF4FC" },
  { name: "Venus", color: "#F7CC7F" },
  { name: "Earth", color: "#545BFE" },
  { name: "Mars", color: "#FF6A45" },
  { name: "Jupiter", color: "#ECAD7A" },
  { name: "Saturn", color: "#FCCB6B" },
  { name: "Uranus", color: "#65F0D5" },
  { name: "Neptune", color: "#497EFA" },
];

const MobileMenu = (onClose) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {PLANETS.map((planet) => {
          const path = `/${planet.name.toLowerCase()}`;
          return (
            <li key={planet.name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                onClick={onClose}
              >
                <div className={styles.linkWrapper}>
                  <span
                    className={styles.dot}
                    style={{ backgroundColor: planet.color }}
                  ></span>
                  {planet.name}
                </div>
                <span>
                  <img src={arrowIcon} alt="Arrow icon" />
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileMenu;
