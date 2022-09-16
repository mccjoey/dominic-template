import styles from "./styles.module.scss";
import Image from "next/future/image";

export const Certificates = () => {
  return (
    <section className={styles.certificates}>
      <h1>Certificados</h1>
      <div className={styles.certificatesList}>
        <Image
          width={32}
          height={32}
          priority
          src="/icons/pagarme.svg"
          alt="Pagarme"
        />
        <Image
          width={32}
          height={32}
          priority
          src="/icons/letsencrypt.svg"
          alt="Let's Encrypt"
        />
      </div>
    </section>
  );
};
