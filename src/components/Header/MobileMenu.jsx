import styles from "./mobileMenu.module.scss";
import arrowIcon from "../../assets/icon-chevron.svg";

import { NavLink } from "react-router";

const PLANETS = [
  { name: "Mercury", color: "var(--color-mercury)" },
  { name: "Venus", color: "var(--color-venus)" },
  { name: "Earth", color: "var(--color-earth)" },
  { name: "Mars", color: "var(--color-mars)" },
  { name: "Jupiter", color: "var(--color-jupiter)" },
  { name: "Saturn", color: "var(--color-saturn)" },
  { name: "Uranus", color: "var(--color-uranus)" },
  { name: "Neptune", color: "var(--color-neptune)" },
];

const MobileMenu = () => {
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
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
}
              >
                <div className={styles.linkWrapper}>
                    <span
      className={styles.dot}
      style={{ backgroundColor: planet.color }}
    ></span>
                {planet.name}
                </div>
                <span><img src={arrowIcon} alt="Arrow icon" /></span>

              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileMenu;
