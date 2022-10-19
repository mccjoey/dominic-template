import styles from "./styles.module.scss";

import type { NextPage } from "next";
import { PageBanner } from "../../views/mobile/components/PageBanner";
import { FilterProducts } from "./FilterProducts";
import { ProductsList } from "./ProductsList";
import { useState } from "react";

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
