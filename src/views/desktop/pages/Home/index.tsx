import styles from "./styles.module.scss";
import type { NextPage } from "next";
import { PageBanner } from "../../../../components/PageBanner";
import { NewestProducts } from "../../../../components/NewestProducts";
import { ProductsCarousel } from "../../../../components/ProductsCarousel";
import { CenteredCarousel } from "../../../../components/CenteredCarousel";

const HomeDesktop: NextPage = () => {
  console.log("asdfsajb")
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageBanner />
        <NewestProducts />
        <CenteredCarousel />
        <ProductsCarousel />
        {/* <LivesCarousel /> */}
      </div>
    </main>
  );
};

export default HomeDesktop;
