import type { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import { FeaturedProduct } from "../../components/ FeaturedProduct";
import { CenteredCarousel } from "../../components/CenteredCarousel";
import { LivesCarousel } from "../../components/LivesCarousel";
import { NewestProducts } from "../../components/NewestProducts";
import { PageBanner } from "../../components/PageBanner";
import { ProductsCarousel } from "../../components/ProductsCarousel";
import { HomeDrawer } from "./HomeDrawer";
import styles from "./styles.module.scss";

const HomeMobile: NextPage = () => {
  const [homeDrawer, setHomeDrawer] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setHomeDrawer(true);
    }, 2000);
  }, []);

  return (
    <Fragment>
      <main className={styles.main}>
        <div className={styles.content}>
          <PageBanner />
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
