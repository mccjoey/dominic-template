import { AiFillStar } from "react-icons/ai";
import styles from "./styles.module.scss";

export const ReviewItem: React.FC = () => {
  return (
    <div className={styles.reviewItem}>
      <header>
        <small>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </small>
        <p>
          Dominic
          <span>20.Jul</span>
        </p>
      </header>
      <div >
        <h1>Roupa muito bonita</h1>
        <p>
          I’m extremely impressed with this beautiful blazer. Quality fabric,
          excellent tailored stitches for a reasonable price. This was my first
          order of many more orders to come. Thank you.
        </p>
      </div>
    </div>
  );
};
