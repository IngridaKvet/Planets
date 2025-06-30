import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div></div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
