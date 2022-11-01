import Image from "next/image";
import useView from "../../hooks/useView";
import styles from "./styles.module.scss";

export const PageBanner: React.FC = () => {
  const { innerWidth = 0 } = useView();

  return (
    <section className={styles.pageBanner}>
      {innerWidth <= 780 ? (
        <Image
          src="/images/homeBanner2.jpg"
          priority
          width={1800}
          height={2700}
          alt="banner"
        />
      ) : <Image
      src="/images/products_page_banner.webp"
      priority
      width={1600}
      height={450}
      alt="banner"
    />}

      <h1>Shop now</h1>
    </section>
  );
};
