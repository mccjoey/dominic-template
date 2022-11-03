import styles from "./styles.module.scss";
import type { NextPage } from "next";
import { useState } from "react";
import { FilterProducts } from "../../components/ProductsComponents/FilterProducts";
import { ProductsList } from "../../components/ProductsComponents/ProductsList";
import useView from "../../hooks/useView";

const Products: NextPage = () => {
  const [gridView, setGridView] = useState(2);
  const { innerWidth = 0 } = useView();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topPage}>
          <h1>Novidades</h1>
          {innerWidth <= 780 ? (
            <div style={{ padding: "100% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/762781104?h=07301b79de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&controls=0&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="1200x1200 5s teste.mp4"
              />
            </div>
          ) : (
            <div style={{ padding: "33.33% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/762782447?h=eb806320e8&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&controls=0&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="1200x1200 5s teste.mp4"
              />
            </div>
          )}
        </div>

        <FilterProducts setGridView={setGridView} />
        <ProductsList gridView={gridView} />
      </div>
    </main>
  );
};

export default Products;
