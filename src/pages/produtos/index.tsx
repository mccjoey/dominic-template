import styles from "./styles.module.scss";
import type { NextPage } from "next";
import { PageBanner } from "../../views/mobile/components/PageBanner";
import { useState } from "react";
import { FilterProducts } from "../../components/ProductsComponents/FilterProducts";
import { ProductsList } from "../../components/ProductsComponents/ProductsList";
import dynamic from "next/dynamic";
import useView from "../../hooks/useView";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Products: NextPage = () => {
  const [gridView, setGridView] = useState(2);
  const { innerWidth = 0 } = useView();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
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
          // <PageBanner />
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

        <FilterProducts setGridView={setGridView} />
        <ProductsList gridView={gridView} />
      </div>
    </main>
  );
};

export default Products;
