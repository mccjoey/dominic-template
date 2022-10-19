import Image from "next/future/image";
import styles from "./styles.module.scss";

export const HeaderDesk: React.FC = () => {
  return (
    <>
      <header className={styles.headerDesk}>
        <div className={styles.content}>
          <nav className={styles.menu}>
            <ul>
              <li>Novidades</li>
              <li>Roupas</li>
              <li>Promoção</li>
              <li>Blog</li>
            </ul>
          </nav>
          <h1>Título</h1>
          <nav className={styles.navigation}>
            <Image
              width={32}
              height={32}
              src="/icons/search.svg"
              priority
              alt="Pesquisar"
              // onClick={toggleSearch}
            />
            <Image
              width={32}
              height={32}
              src="/icons/cart.svg"
              priority
              alt="Carrinho"
            />
            <p>pERFIL</p>
            <p>TV</p>
          </nav>
        </div>
      </header>
      <header className={styles.subHeaderDesk}>
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
