import styles from "./styles.module.scss";
import { Fragment } from "react";
import { ProductItem } from "./ProductItem";
import { FavoritedProductItem } from "./FavoritedProductItem";

export const FavoriteTabContent = () => {
  return (
    <Fragment>
      <div className={styles.productsList}>
        {Array.from({ length: 2 }).map((product, index) => (
          <FavoritedProductItem key={`FavoriteProductItem${index}`} />
        ))}
      </div>     
    </Fragment>
  );
};
