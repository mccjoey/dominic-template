import { ProductItem } from "./ProductItem";
import styles from "./styles.module.scss";

export const ProductsList = () => {
  return (
    <section className={styles.productsList}>
      {Array.from({ length: 4 }).map((product, index) => (
        <ProductItem key={`HomeProduct-${index}`} />
      ))}
    </section>
  );
};
