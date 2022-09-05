import Image from "next/future/image";
import styles from "./styles.module.scss";

export const PageBanner: React.FC = () => {
  return (
    <section className={styles.pageBanner}>
      <Image
        src="/images/homeBanner.jpg"
        priority
        width={1800}
        height={2700}
        alt="banner"
      />
      <h1>Shop now</h1>
    </section>
  );
};
