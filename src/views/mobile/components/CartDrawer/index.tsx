import styles from "./styles.module.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ProductItem } from "./ProductItem";

interface CartDrawerProps {
  isOpen: boolean;
  setIsOpen: (state?: boolean | any) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Drawer open={isOpen} onClose={setIsOpen} direction="right" size="95%">
      <section className={styles.cartContent}>
        <header>
          <p className={styles.title}>Carrinho</p>
          <p className={styles.closeButton} onClick={() => setIsOpen(!isOpen)}>
            Fechar
          </p>
        </header>
        <div className={styles.productsList}>
          {Array.from({ length: 15 }).map((product, index) => (
            <ProductItem key={`CartProductItem${index}`} />
          ))}
        </div>
        <footer>
          <div className={styles.subtotal}>
            <p>Subtotal:</p>
            <p>R$299,00</p>
          </div>
          <div className={styles.buttons}>
            <button>Ver carrinho</button>
            <button>Finalizar compra</button>
          </div>
        </footer>
      </section>
    </Drawer>
  );
};
