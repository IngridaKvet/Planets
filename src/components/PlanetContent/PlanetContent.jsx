import styles from "./planetContent.module.scss";
import SourceIcon from "../../assets/icon-source.svg";

const PlanetContent = ({ planet, tab }) => {

  return (
    <section className={styles.mainContent}>
      <h1 className="extraLargeHeading">{planet.name}</h1>
      <p className="bodyText">{planet[tab].content}</p>
      <p className={`bodyText ${styles.linkText}`}>
        Source: {"  "}
        <a
          href={planet[tab].source} 
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
