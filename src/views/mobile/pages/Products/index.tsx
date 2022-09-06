import { PageBanner } from "../../components/PageBanner";
import { FilterProducts } from "./FilterProducts";
import { ProductsList } from "./ProductsList";
import styles from "./styles.module.scss";

export const ProductsMobile = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageBanner />
        <FilterProducts />
        <ProductsList />
      </div>
    </main>
  );
};
