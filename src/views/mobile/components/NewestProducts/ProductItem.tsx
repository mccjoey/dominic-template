import Image from "next/image";
import styles from "./styles.module.scss";

export const ProductItem = () => {
  return (
    <div className={styles.productItem}>
      <Image
        src="/images/placeholder_product.webp"
        loading="lazy"
        width={1800}
        height={2700}
        alt="Produto"
      />
      <p className={styles.productName}>Blusa Poá Gola Torcida - Preto</p>
      <small className={styles.productPrice}>R$139,00</small>
      <small className={styles.productInterest}>3x de R$46,33</small>
    </div>
  );
};
