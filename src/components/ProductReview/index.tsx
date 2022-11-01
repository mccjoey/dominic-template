import { AiFillStar } from "react-icons/ai";
import { ReviewItem } from "./ReviewItem";
import styles from "./styles.module.scss";

export const ProductReview: React.FC = () => {
  return (
    <section className={styles.productReview}>
      <div className={styles.content}>
        <div className={styles.reviewActions}>
          <small>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </small>
          <p>Rated 5.00 out of 5 Based on 19 reviews</p>
          <button>Escrever uma review</button>
        </div>
        <div className={styles.reviewList}>
          {Array.from({ length: 10 }).map((review, index) => (
            <ReviewItem key={`Review-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
