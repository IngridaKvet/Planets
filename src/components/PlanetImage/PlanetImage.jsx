import styles from "./planetImage.module.scss";
import planetImages from "./planetsUtil";

const PlanetImage = ({ planet, tab }) => {
  const name = planet.name.toLowerCase();
  const images = planetImages[planet.name];

  const mainImg = tab === "structure" ? images.internal : images.planet;

  return (
    <div className={styles.imageWrapper}>
      <img className={`${styles.planetImage} ${tab === "geology" ? styles.withGeology : ""}`}src={mainImg} alt={`${planet.name} illustration`} />
      {tab === "geology" && (
        <img
          className={`${styles.geologyImage} ${styles[name]}`}
          src={images.geology}
          alt={`${planet.name} surface geology`}
        />
      )}
    </div>
  );
};

export default PlanetImage;
