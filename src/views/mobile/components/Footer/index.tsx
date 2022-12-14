import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsDot, BsWhatsapp } from "react-icons/bs";
import useShowFooter from "../../../../hooks/useShowFooter";

export const FooterMobile: React.FC = () => {
  const showFooter = useShowFooter();
  const { pathname } = useRouter();

  const nonPathsWhatsIcon: boolean = ["/colecoes/feed"].includes(pathname);

  return (
    <>
      <footer
        className={`${styles.footer} ${styles[showFooter ? "show" : "hidden"]}`}
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
                pathname == "/colecoes" && styles.active
              }`}
            >
              <div className={styles.indicator}>
                <BsDot />
              </div>
              <Link href="/colecoes">
                <Image
                  width={32}
                  height={32}
                  src="/icons/live.svg"
                  priority
                  alt="Cole????es"
                />
              </Link>
            </li>
            <li
              className={`${styles.footerMenuItem} ${
                pathname == "/user/login" && styles.active
              }`}
            >
              <div className={styles.indicator}>
                <BsDot />
              </div>
              <Link href="/user/login">
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
      {!nonPathsWhatsIcon && <BsWhatsapp className={styles.whatsIcon} />}
    </>
  );
};
