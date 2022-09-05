import styles from "./styles.module.scss";
import Image from "next/future/image";

export const HeaderMobile: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.headerMenu}>
          <Image width={32} height={32} src="/icons/menu.svg" priority />
        </div>
        <h1 className={styles.headerTitle}>Título</h1>
        <div className={styles.headerNav}>
          <Image width={32} height={32} src="/icons/search.svg" priority />
          <Image width={32} height={32} src="/icons/cart.svg" priority />
        </div>
      </div>
    </header>
  );
};
