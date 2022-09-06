import { useState } from "react";
import { PageBanner } from "../../components/PageBanner";
import { FilterProducts } from "./FilterProducts";
import { ProductsList } from "./ProductsList";
import styles from "./styles.module.scss";

export const ProductsMobile = () => {
  const [gridView, setGridView] = useState(2);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageBanner />
        <FilterProducts setGridView={setGridView} />
        <ProductsList gridView={gridView} />
      </div>
    </main>
  );
};
