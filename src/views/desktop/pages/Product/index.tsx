import { useState } from "react";
import styles from "./styles.module.scss";

export const ProductDesktop = () => {
  const [gridView, setGridView] = useState(2);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        Produto
      </div>
    </main>
  );
};