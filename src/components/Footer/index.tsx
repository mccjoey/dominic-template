import styles from "./styles.module.scss";
import { BiHomeSmile } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { BsPerson, BsBag, BsDot } from "react-icons/bs";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav>
          <li className={`${styles.footerMenuItem} ${styles.active}`}>
            <div className={styles.indicator}>
              <BsDot />
            </div>
            <BiHomeSmile />
          </li>
          <li className={styles.footerMenuItem}>
            <div className={styles.indicator} />
            <BsBag />
          </li>
          <li className={styles.footerMenuItem}>
            <div className={styles.indicator} />
            <MdLiveTv />
          </li>
          <li className={styles.footerMenuItem}>
            <div className={styles.indicator} />
            <BsPerson />
          </li>
        </nav>
      </div>
    </footer>
  );
};
