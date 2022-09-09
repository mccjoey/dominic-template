import Image from "next/future/image";
import styles from "./styles.module.scss";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { GrClose} from "react-icons/gr";
import { useCallback, useState } from "react";

export const ProductItem = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  const incrementQuantity = useCallback(() => {
    setProductQuantity(state => state + 1)
  }, [])

  const decrementQuantity = useCallback(() => {
    if(productQuantity == 0) return;
    setProductQuantity(state => state  -1)
  }, [productQuantity])

  return (
    <div className={styles.productItem}>
      <Image
        src="/images/placeholder_product.webp"
        loading="lazy"
        width={1800}
        height={2700}
        alt="banner"
      />
      <GrClose className={styles.removeProduct}/>
      <div className={styles.productInfo}>
        <p className={styles.productName}>Blazer Linho Alongado - Uva - P</p>
        <div className={styles.productQuantity}>
          <p className={styles.value}>
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
    </div>
  );
};
