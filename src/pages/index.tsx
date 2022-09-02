import type { NextPage } from "next";
import { PageBanner } from "../components/PageBanner";
import { SectionTitle } from "../components/SectionTitle";
import styles from "./styles.module.scss";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageBanner />
        <div>
          <SectionTitle />
        </div>
        <div>Novidades</div>
        <div>Novidades2</div>
        <div>BestSellerCarousel</div>
        <div>Lives</div>
      </div>
    </main>
  );
};

export default Home;
