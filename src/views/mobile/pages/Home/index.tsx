import type { NextPage } from "next";
import { FeaturedProduct } from "../../components/ FeaturedProduct";
import { CenteredCarousel } from "../../components/CenteredCarousel";
import { LivesCarousel } from "../../components/LivesCarousel";
import { NewestProducts } from "../../components/NewestProducts";
import { PageBanner } from "../../components/PageBanner";
import { ProductsCarousel } from "../../components/ProductsCarousel";
import styles from "./styles.module.scss";

const HomeMobile: NextPage = () => {
  return (
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
  );
};

export default HomeMobile;
