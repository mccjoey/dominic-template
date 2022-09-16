import styles from "./styles.module.scss";
import Image from "next/future/image";

export const Apps = () => {
  return (
    <section className={styles.apps}>
      <div className={styles.appsList}>
        <Image
          width={32}
          height={32}
          priority
          src="/icons/appstore.svg"
          alt="App Store"
        />
        <Image
          width={32}
          height={32}
          priority
          src="/icons/googleplay.svg"
          alt="Google Play"
        />
      </div>
    </section>
  );
};
