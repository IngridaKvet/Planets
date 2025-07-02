import styles from "./planetPage.module.scss";
import PlanetStats from "../PlanetStats/PlanetStats";
import PlanetImage from "../PlanetImage/PlanetImage";
import PlanetContent from "../PlanetContent/PlanetContent";
import { useState, useEffect } from "react";

const PlanetPage = ({ planet }) => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setActiveTab("overview");
  }, [planet.name]);

  return (
    <section className={styles.page}>
      <div className={styles.mobileTabs}>
        <button
          className={`${styles.mobileTab} ${
            activeTab === "overview"
              ? `${styles[`${planet.name.toLowerCase()}Tab`]}`
              : ""
          } `}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`${styles.mobileTab} ${
            activeTab === "structure"
              ? `${styles[`${planet.name.toLowerCase()}Tab`]}`
              : ""
          } `}
          onClick={() => setActiveTab("structure")}
        >
          Structure
        </button>

        <button
          className={`${styles.mobileTab} ${
            activeTab === "geology"
              ? `${styles[`${planet.name.toLowerCase()}Tab`]}`
              : ""
          } `}
          onClick={() => setActiveTab("geology")}
        >
          Geology
        </button>
      </div>

      <div className={styles.contentWrapper}>
        <PlanetImage planet={planet} tab={activeTab} />
        <div className={styles.textWrapper}>
          <PlanetContent planet={planet} tab={activeTab} />
          <div className={styles.tabs}>
            <button
              className={`mediumHeading ${styles.tabsBtn} ${
                activeTab === "overview"
                  ? `${styles[planet.name.toLowerCase()]}`
                  : ""
              }`}
              onClick={() => setActiveTab("overview")}
            >
              <span className={styles.numbering}>01</span>
              <span>Overview</span>
            </button>
            <button
              className={`mediumHeading ${styles.tabsBtn} ${
                activeTab === "structure"
                  ? `${styles[planet.name.toLowerCase()]}`
                  : ""
              }`}
              onClick={() => setActiveTab("structure")}
            >
              <span className={styles.numbering}>02</span>
              <span>Internal Structure</span>
            </button>
            <button
              className={`mediumHeading ${styles.tabsBtn} ${
                activeTab === "geology"
                  ? `${styles[planet.name.toLowerCase()]}`
                  : ""
              }`}
              onClick={() => setActiveTab("geology")}
            >
              <span className={styles.numbering}>03</span>
              <span>Surface Geology</span>
            </button>
          </div>
        </div>
      </div>

      <PlanetStats planet={planet} />
    </section>
  );
};

export default PlanetPage;
