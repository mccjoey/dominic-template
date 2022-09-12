import styles from "./styles.module.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ProductItem } from "./ProductItem";
import { GrClose } from "react-icons/gr";
import { FavoritedProductItem } from "./FavoritedProductItem";

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
        <GrClose
          className={styles.closeModal}
          onClick={() => setIsOpen(!isOpen)}
        />
        <header>
          <p className={styles.title}>Lista de desejos (1)</p>
          <p className={`${styles.title} ${styles.active}`}>Carrinho (1)</p>
        </header>
        <div className={styles.productsList}>
          {Array.from({ length: 3 }).map((product, index) => (
            <ProductItem key={`CartProductItem${index}`} />
          ))}
          <FavoritedProductItem />
        </div>
        <footer>
          <div className={styles.subtotal}>
            <p>
              Subtotal:<span>R$299,00</span>
            </p>
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
