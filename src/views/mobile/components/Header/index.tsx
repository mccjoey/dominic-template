import styles from "./styles.module.scss";
import Image from "next/future/image";
import useHeaderState from "../../../../hooks/useHeaderState";
import { CartDrawer } from "../CartDrawer";
import { useState } from "react";

export const HeaderMobile: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const headerState = useHeaderState();

  return (
    <>
      <header
        className={`${styles.header} ${
          styles[headerState ? "sticky" : "transparent"]
        }`}
      >
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
              onClick={() => setIsCartOpen(true)}
            />
          </div>
        </div>
      </header>
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
};
