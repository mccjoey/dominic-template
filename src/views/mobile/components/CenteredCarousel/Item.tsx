
import styles from "./styles.module.scss";

export const Item = () => {
  return (
    <div className={styles.item}>      
      <div className={styles.image}></div>
      <p className={styles.name}>Summer Novidade</p>      
    </div>
  );
};
