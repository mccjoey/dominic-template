import type { NextPage } from "next";
import { Fragment, useState } from "react";
import { useTimeout } from "../../../../hooks/useTimeout";
import { FeaturedProduct } from "../../components/ FeaturedProduct";
import { CenteredCarousel } from "../../../../components/CenteredCarousel";
import { LivesCarousel } from "../../components/LivesCarousel";
import { NewestProducts } from "../../components/NewestProducts";
import { ProductsCarousel } from "../../components/ProductsCarousel";
import { HomeDrawer } from "./HomeDrawer";
import styles from "./styles.module.scss";

const HomeMobile: NextPage = () => {
  const [homeDrawer, setHomeDrawer] = useState<boolean>(false);
  useTimeout({ setState: setHomeDrawer });

  return (
    <Fragment>
      <main className={styles.main}>
        <div className={styles.content}>
          <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/755671237?h=60d40c4444&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&controls=0&background=1&muted=1"
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
          <FeaturedProduct />
          <NewestProducts />
          <CenteredCarousel />
          <ProductsCarousel />
          <LivesCarousel />
        </div>
      </main>
      <HomeDrawer isOpen={homeDrawer} setIsOpen={setHomeDrawer} />
    </Fragment>
  );
};

export default HomeMobile;


