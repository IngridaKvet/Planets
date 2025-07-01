import styles from "./planetContent.module.scss";
import SourceIcon from "../../assets/icon-source.svg";

const PlanetContent = ({ planet }) => {
  return (
    <section className={styles.mainContent}>
      <h1 className="extraLargeHeading">{planet.name}</h1>
      <p className="bodyText">{planet.overview.content}</p>
      <p className={`bodyText ${styles.linkText}`}>
        Source: {"  "}
        <a
          href={planet.overview.source}
          target="_blank"
          className={styles.link}
        >
          Wikipedia
        </a>{" "}
        <img src={SourceIcon} alt="Source icon" />{" "}
      </p>
    </section>
  );
};

export default PlanetContent;
