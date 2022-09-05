import styles from "./styles.module.scss";
import { BiHomeSmile } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { BsPerson, BsBag, BsDot } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";

export const FooterMobile: React.FC = () => {
  const [viewPosition, setViewPosition] = useState<string>("show");
  const getViewPosition = useCallback(() => {
    if (window.scrollY >= 450) {
      setViewPosition("disable");
    } else {
      setViewPosition("show");
    }
  }, [viewPosition]);

  useEffect(() => {
    window.addEventListener("scroll", getViewPosition, false);
    return () => window.removeEventListener("scroll", getViewPosition, false);
  }, []);

  return (
    <footer className={`${styles.footer} ${styles[viewPosition]}`}>
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
