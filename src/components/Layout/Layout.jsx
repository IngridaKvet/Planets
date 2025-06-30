import styles from "./layout.module.scss";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
