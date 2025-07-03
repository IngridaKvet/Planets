import { BounceLoader } from "react-spinners";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <BounceLoader color="#ffffff" />
      <p className="mediumHeading">Loading...</p>
    </div>
  );
};

export default Loading;
