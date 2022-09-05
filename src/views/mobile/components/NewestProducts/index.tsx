import { SectionTitle } from "../SectionTitle";
import { ProductItem } from "./ProductItem";
import styles from "./styles.module.scss";

export const NewestProducts = () => {
  return (
    <section className={styles.newestProducts}>
      <SectionTitle category="Category Focus" sectionTitle="Novidades" />
      <div className={styles.productsList}>
        {Array.from({ length: 4 }).map((product, index) => (
          <ProductItem key={`HomeProduct-${index}`} />
        ))}
      </div>
    </section>
  );
};
