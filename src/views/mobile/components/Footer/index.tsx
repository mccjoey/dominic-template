import styles from "./styles.module.scss";
import { BiHomeSmile } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { BsPerson, BsBag, BsDot } from "react-icons/bs";
import useViewPosition from "../../../../hooks/useViewPosition";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const FooterMobile: React.FC = () => {
  const viewPosition = useViewPosition();
  const { asPath } = useRouter();

  console.log(asPath);

  return (
    <footer className={`${styles.footer} ${styles[viewPosition]}`}>
      <div className={styles.content}>
        <nav>
          <li
            className={`${styles.footerMenuItem} ${
              asPath == "/" && styles.active
            }`}
          >
            <div className={styles.indicator}>
              <small>&#9679;</small>
            </div>
            <Link href="/">
              <Image
                width={32}
                height={32}
                src="/icons/home.svg"
                priority
                alt="Home"
              />
            </Link>
          </li>
          <li
            className={`${styles.footerMenuItem} ${
              asPath == "/produtos" && styles.active
            }`}
          >
            <div className={styles.indicator}>
              <small>&#9679;</small>
            </div>
            <Link href="/produtos">
              <Image
                width={32}
                height={32}
                src="/icons/shopping_bag.svg"
                priority
                alt="Produtos"
              />
            </Link>
          </li>
          <li
            className={`${styles.footerMenuItem} ${
              asPath == "/feed" && styles.active
            }`}
          >
            <div className={styles.indicator}>
              <small>&#9679;</small>
            </div>
            <Link href="/feed">
              <Image
                width={32}
                height={32}
                src="/icons/live.svg"
                priority
                alt="Live"
              />
            </Link>
          </li>
          <li
            className={`${styles.footerMenuItem} ${
              asPath == "/perfil" && styles.active
            }`}
          >
            <div className={styles.indicator}>
              <small>&#9679;</small>
            </div>
            <Link href="/perfil">
              <Image
                width={32}
                height={32}
                src="/icons/user.svg"
                priority
                alt="User"
              />
            </Link>
          </li>
        </nav>
      </div>
    </footer>
  );
};
