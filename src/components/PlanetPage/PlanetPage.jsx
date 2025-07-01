import styles from "./planetPage.module.scss";
import PlanetStats from "../PlanetStats/PlanetStats";
import PlanetImage from "../PlanetImage/PlanetImage";
import PlanetContent from "../PlanetContent/PlanetContent";

const PlanetPage = ({ planet }) => {
  return (
    <section className={styles.page}>
      <div className={styles.contentWrapper}>
        <PlanetImage planet={planet} tab={"geology"} />
        <div>
          <PlanetContent planet={planet} />
          <div className={styles.tabs}></div>
        </div>
      </div>

      <PlanetStats planet={planet} />
    </section>
  );
};

export default PlanetPage;
