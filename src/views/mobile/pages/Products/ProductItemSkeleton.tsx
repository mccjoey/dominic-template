import styles from "./styles.module.scss";
import { Skeleton } from "@mui/material";

export const ProductItemSkeleton: React.FC = () => {
  return (
    <div className={styles.productItemSkeleton}>
      <Skeleton variant="rectangular" width="100%" height={262} />
      <p className={styles.productName}>
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
      </p>
      <small className={styles.productPrice}>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50px" }} />
      </small>
      <small className={styles.productInterest}>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "80px" }} />
      </small>
    </div>
  );
};
