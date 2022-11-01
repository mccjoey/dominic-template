import Image from "next/image";
import styles from "./styles.module.scss";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useCallback, useState } from "react";

export const ProductItem = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  const incrementQuantity = useCallback(() => {
    setProductQuantity((state) => state + 1);
  }, []);

  const decrementQuantity = useCallback(() => {
    if (productQuantity == 0) return;
    setProductQuantity((state) => state - 1);
  }, [productQuantity]);

  return (
    <div className={styles.productItem}>
      <Image
        src="/images/placeholder_product.webp"
        loading="lazy"
        width={1800}
        height={2700}
        alt="banner"
      />
      <AiOutlineDelete className={styles.removeProduct} />
      <div className={styles.productInfo}>
        <p className={styles.productName}>Blazer Linho Alongado</p>
        <p className={styles.productColor}>Cor: Uva</p>
        <p className={styles.productSize}>Tamanho: P</p>
        <p className={styles.productQuantity}>
          Qtd
          <span>
            <AiFillCaretLeft onClick={decrementQuantity} />
            {productQuantity}
            <AiFillCaretRight onClick={incrementQuantity} />
          </span>
        </p>
        <p className={styles.productPrice}>R$299,99</p>
      </div>
    </div>
  );
};
