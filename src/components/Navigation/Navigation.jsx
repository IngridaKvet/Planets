import styles from "./navigation.module.scss";
import { NavLink } from "react-router";

const PLANETS = [
  { name: "Mercury", className: "mercury" },
  { name: "Venus", className: "venus" },
  { name: "Earth", className: "earth" },
  { name: "Mars", className: "mars" },
  { name: "Jupiter", className: "jupiter" },
  { name: "Saturn", className: "saturn" },
  { name: "Uranus", className: "uranus" },
  { name: "Neptune", className: "neptune" },
];

const Navigation = () => {
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
                  `${styles.navLink} ${styles[planet.className]} ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                {planet.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
