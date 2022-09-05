import Image from "next/future/image";
import { SectionTitle } from "../SectionTitle";
import styles from "./styles.module.scss";

export const FeaturedProduct = () => {
  return (
    <section className={styles.featuredProduct}>
      <SectionTitle category="Category Focus" sectionTitle="Premium Style" />
      <Image
        src="/images/featuredProduct.webp"
        priority
        width={1800}
        height={2700}
        alt="banner"
      />
      <div className={styles.product}>
        <Image
          src="/images/featuredProduct2.webp"
          priority
          width={1800}
          height={2700}
          alt="banner"
        />
        <p className={styles.productName}>Blazer Maxi Ondulado – Off-White</p>
        <small className={styles.productPrice}>R$299,00</small>
        <small className={styles.productInterest}>6x de R$49,83</small>
      </div>
    </section>
  );
};
