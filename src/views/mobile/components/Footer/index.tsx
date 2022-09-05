import styles from "./styles.module.scss";
import { BiHomeSmile } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { BsPerson, BsBag, BsDot } from "react-icons/bs";
import useViewPosition from "../../../../hooks/useViewPosition";
import Image from "next/future/image";

export const FooterMobile: React.FC = () => {
  const viewPosition = useViewPosition();

  return (
    <footer className={`${styles.footer} ${styles[viewPosition]}`}>
      <div className={styles.content}>
        <nav>
          <li className={`${styles.footerMenuItem} ${styles.active}`}>
            <div className={styles.indicator}>
              <small> &#9679;</small>
            </div>
            <Image width={32} height={32} src="/icons/home.svg" priority />
          </li>
          <li className={styles.footerMenuItem}>
            <div className={styles.indicator} />
            <Image
              width={32}
              height={32}
              src="/icons/shopping_bag.svg"
              priority
            />
          </li>
          <li className={styles.footerMenuItem}>
            <div className={styles.indicator} />
            <Image width={32} height={32} src="/icons/live.svg" priority />
          </li>
          <li className={styles.footerMenuItem}>
            <div className={styles.indicator} />
            <Image width={32} height={32} src="/icons/user.svg" priority />
          </li>
        </nav>
      </div>
    </footer>
  );
};
