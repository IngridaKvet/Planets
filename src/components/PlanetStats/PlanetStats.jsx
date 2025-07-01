import styles from "./planetStats.module.scss";

const PlanetStats = ({ planet }) => {
  return (
    <section className={styles.stats}>
      <div className={styles.statsWrapper}>
        <h2 className={`smallHeading ${styles.label}`}>Rotation Time</h2>
        <h4 className={`largeHeading ${styles.value}`}>{planet.rotation}</h4>
      </div>
      <div className={styles.statsWrapper}>
        <h2 className={`smallHeading ${styles.label}`}>Revolution Time</h2>
        <h4 className={`largeHeading ${styles.value}`}>{planet.revolution}</h4>
      </div>
      <div className={styles.statsWrapper}>
        <h2 className={`smallHeading ${styles.label}`}>Radius</h2>
        <h4 className={`largeHeading ${styles.value}`}>{planet.radius}</h4>
      </div>
      <div className={styles.statsWrapper}>
        <h2 className={`smallHeading ${styles.label}`}>Average Temp.</h2>
        <h4 className={`largeHeading ${styles.value}`}>{planet.temperature}</h4>
      </div>
    </section>
  );
};

export default PlanetStats;
