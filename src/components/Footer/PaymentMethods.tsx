import styles from "./styles.module.scss";
import Image from "next/image";

export const PaymentsMethods = () => {
  return (
    <section className={styles.paymentMethods}>
      <h1>Formas de Pagamento</h1>
      <div className={styles.paymentsList}>
        <Image
          width={32}
          height={32}
          priority
          src="/icons/visa.svg"
          alt="Visa"
        />
        <Image
          width={32}
          height={32}
          priority
          src="/icons/mastercard.svg"
          alt="Master"
        />
        <Image width={32} height={32} priority src="/icons/elo.svg" alt="Elo" />
        <Image width={32} height={32} priority src="/icons/pix.svg" alt="Pix" />
        <Image
          width={32}
          height={32}
          priority
          src="/icons/americanexpress.svg"
          alt="American Express"
        />
        <Image
          width={32}
          height={32}
          priority
          src="/icons/dinners.svg"
          alt="Dinners"
        />
        <Image
          width={32}
          height={32}
          priority
          src="/icons/hipercard.svg"
          alt="Hipercard"
        />
      </div>
      <p>Parcelamento em até 12x sem juros com mínimo de R$ 198.</p>
    </section>
  );
};
