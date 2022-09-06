import { ProductItem } from "./ProductItem";
import styles from "./styles.module.scss";

interface ProductsListProps {
  gridView: number;
}

export const ProductsList: React.FC<ProductsListProps> = ({ gridView }) => {
  return (
    <section
      className={styles.productsList}
      style={{ gridTemplateColumns: `repeat(${gridView},1fr)` }}
    >
      {Array.from({ length: 4 }).map((product, index) => (
        <ProductItem key={`HomeProduct-${index}`} gridView={gridView} />
      ))}
    </section>
  );
};
