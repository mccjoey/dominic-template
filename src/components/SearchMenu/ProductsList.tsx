import { ProductItem } from "./ProductItem";
import styles from "./styles.module.scss";

interface ProductsListProps {}

export const ProductsList: React.FC<ProductsListProps> = () => {
  return (
    <section className={styles.productsList}>
      {Array.from({ length: 5 }).map((product, index) => (
        <ProductItem key={`HomeProduct-${index}`} />
      ))}
    </section>
  );
};
