import styles from "./Layout.module.scss";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className={styles.container}>
        <Navigation />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
