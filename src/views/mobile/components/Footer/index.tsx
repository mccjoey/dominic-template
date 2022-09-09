import styles from "./styles.module.scss";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsDot } from "react-icons/bs";
import useShowFooter from "../../../../hooks/useShowFooter";

export const FooterMobile: React.FC = () => {
  const showFooter = useShowFooter();
  const { pathname } = useRouter();

  return (
    <footer
      className={`${styles.footer} ${
        pathname === "/" && styles[showFooter ? "show" : "hidden"]
      }`}
    >
      <div className={styles.content}>
        <nav>
          <li
            className={`${styles.footerMenuItem} ${
              pathname == "/" && styles.active
            }`}
          >
            <div className={styles.indicator}>
              <BsDot />
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
              pathname == "/produtos" && styles.active
            }`}
          >
            <div className={styles.indicator}>
              <BsDot />
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
              pathname == "/feed" && styles.active
            }`}
          >
            <div className={styles.indicator}>
              <BsDot />
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
              pathname == "/perfil" && styles.active
            }`}
          >
            <div className={styles.indicator}>
              <BsDot />
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
