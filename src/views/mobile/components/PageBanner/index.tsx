import Image from "next/future/image";
import styles from "./styles.module.scss";

export const PageBanner: React.FC = () => {
  return (
    <Image
      className={styles.pageBanner}
      src="/images/_09A2340.jpg"
      priority
      width={1800}
      height={2700}
      alt="banner"
    />
  );
};
