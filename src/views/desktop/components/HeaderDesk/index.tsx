import Image from "next/future/image";
import useShowFooter from "../../../../hooks/useShowFooter";
import styles from "./styles.module.scss";
import { BsChevronRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const HeaderDesk: React.FC = () => {
  const isScrollingUp = useShowFooter();
  const [isTopBarVisible, setIsTopBarVisible] = useState<boolean>(true);

  return (
    <>
      {isTopBarVisible && (
        <header className={styles.topBar}>
          <div className={styles.content}>
            <IoMdClose onClick={() => setIsTopBarVisible(false)} />
            <small>FRETE GRÁTIS ACIMA DE R$400,00 *apenas para SP</small>
            <BsChevronRight />
          </div>
        </header>
      )}

      <header
        className={`${styles.headerDesk} ${
          styles[isScrollingUp ? "stickyDown" : "stickyUp"]
        }`}
      >
        <div className={styles.content}>
          <nav className={styles.menu}>
            <ul>
              <li>Novidades</li>
              <li>Roupas</li>
              <li>Promoção</li>
              <li>Blog</li>
            </ul>
          </nav>
          <Image
            width={980}
            height={166.04}
            src="/images/logo_black.svg"
            priority
            alt="Logo"
            className={styles.logo}
          />
          <nav className={styles.navigation}>
            <Image
              width={32}
              height={32}
              src="/icons/search.svg"
              priority
              alt="Pesquisar"
            />
            <Image
              width={32}
              height={32}
              src="/icons/cart.svg"
              priority
              alt="Carrinho"
            />
            <Image
              width={32}
              height={32}
              src="/icons/user.svg"
              priority
              alt="User"
            />
            <Image
              width={32}
              height={32}
              src="/icons/live.svg"
              priority
              alt="Coleções"
            />
          </nav>
        </div>
      </header>
      <header
        className={`${styles.subHeaderDesk}  ${
          styles[isScrollingUp ? "stickyDown" : "stickyUp"]
        }`}
      >
        <div className={styles.content}>
          <nav>
            <ul>
              <li>Blusas</li>
              <li>Calças</li>
              <li>Vestidos</li>
              <li>Blazers</li>
              <li>Casacos</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
