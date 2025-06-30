import styles from "./navigation.module.scss";
import { NavLink } from "react-router";

const PLANETS = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {PLANETS.map((planet) => {
          const path = `/${planet.toLowerCase()}`;
          return (
            <li key={planet}>
              <NavLink
                to={path}
  className={({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
}
              >
                
                {planet}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
