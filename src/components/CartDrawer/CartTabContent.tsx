import styles from "./styles.module.scss";
import { Fragment } from "react";
import { ProductItem } from "./ProductItem";
import { CartFeature } from "../CartFeature";

export const CartTabContent = () => {
  return (
    <Fragment>
      <CartFeature />
      <div className={styles.productsList}>
        {Array.from({ length: 3 }).map((product, index) => (
          <ProductItem key={`CartProductItem${index}`} />
        ))}
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
    </Fragment>
  );
};
