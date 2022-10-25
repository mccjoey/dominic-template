import styles from "./styles.module.scss";
import { Skeleton } from "@mui/material";
import useView from "../../hooks/useView";

export const ProductItemSkeleton: React.FC = () => {
  const { innerWidth = 0 } = useView();

  return (
    <div className={styles.productItemSkeleton}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={innerWidth >= 780 ? 400 : 262}
      />
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
