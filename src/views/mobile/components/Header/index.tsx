import styles from "./styles.module.scss";
import Image from "next/future/image";
import useViewPosition from "../../../../hooks/useViewPosition";

export const HeaderMobile: React.FC = () => {
  const viewPosition = useViewPosition(); 

  return (
    <header className={`${styles.header } ${styles[viewPosition]}`}>
      <div className={styles.content}>
        <div className={styles.headerMenu}>
          <Image
            width={32}
            height={32}
            src="/icons/menu.svg"
            priority
            alt="Menu"
          />
        </div>
        <h1 className={styles.headerTitle}>Título</h1>
        <div className={styles.headerNav}>
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
        </div>
      </div>
    </header>
  );
};
