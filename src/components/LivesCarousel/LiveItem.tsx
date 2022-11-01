import { FaBell } from "react-icons/fa";
import styles from "./styles.module.scss";

export const LiveItem = () => {
  return (
    <div className={styles.liveItem}>
      <div className={styles.content}>
        <p className={styles.liveDate}>2022.06.24</p>
        <h1 className={styles.liveHour}>6:00</h1>
        <FaBell />
      </div>
    </div>
  );
};
