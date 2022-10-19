import styles from "./styles.module.scss";
import type { NextPage } from "next";
import { PageBanner } from "../../views/mobile/components/PageBanner";
import { useState } from "react";
import { FilterProducts } from "../../components/ProductsComponents/FilterProducts";
import { ProductsList } from "../../components/ProductsComponents/ProductsList";

const Products: NextPage = () => {
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

export default Products;
