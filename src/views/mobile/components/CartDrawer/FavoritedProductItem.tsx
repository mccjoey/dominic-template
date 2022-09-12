import Image from "next/future/image";
import styles from "./styles.module.scss";

export const FavoritedProductItem = () => {
  return (
    <div className={styles.productItem}>
      <Image
        src="/images/placeholder_product.webp"
        loading="lazy"
        width={1800}
        height={2700}
        alt="banner"
      />      
      <div className={styles.productInfo}>
        <p className={styles.productName}>Blazer Linho Alongado</p>
        <p className={styles.productColor}>Cor: Uva</p>
        <p className={styles.productPrice}>R$299,99</p>
        <p className={styles.removeFavorite}>Remover dos favoritos</p>
      </div>
    </div>
  );
};
