import { PageBanner } from "../../components/PageBanner";
import styles from "./styles.module.scss";

export const CategoryMobile = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <PageBanner />
      </div>
    </main>
  );
};
