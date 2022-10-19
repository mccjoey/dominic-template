import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { ProductItemSkeleton } from "./ProductItemSkeleton";
import styles from "./styles.module.scss";

interface ProductsListProps {
  gridView: number;
}

export const ProductsList: React.FC<ProductsListProps> = ({ gridView }) => {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <section
      className={styles.productsList}
      style={{ gridTemplateColumns: `repeat(${gridView},1fr)` }}
      data-gridview={gridView}
    >
      {loading
        ? Array.from({ length:4  }).map((product, index) => (
            <ProductItemSkeleton key={`HomeProduct-${index}`} />
          ))
        : Array.from({ length: 12 }).map((product, index) => (
            <ProductItem key={`HomeProduct-${index}`} gridView={gridView} />
          ))}
    </section>
  );
};
