import Map from "../components/Map";
import SideBar from "../components/SideBar";
import User from "../components/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <div className={styles.userSidebar}>
        <SideBar className={styles.sidebar} />
        <User className={styles.user} />
      </div>
      <div className={styles.main}>
        <Map className={styles.map} />
      </div>
    </div>
  );
}

export default AppLayout;
