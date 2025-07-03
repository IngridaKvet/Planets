import styles from "./layout.module.scss";
import Header from "../Header/Header";
import { useState } from "react";

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {!mobileOpen && <main className={styles.main}>{children}</main>}
    </div>
  );
};

export default Layout;
