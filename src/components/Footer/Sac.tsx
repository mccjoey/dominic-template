import Image from "next/future/image";
import styles from "./styles.module.scss";

export const Sac = () => {
  return (
    <section className={styles.sac}>
      <div>
        <h1>
          <i>
            <Image
              width={20}
              height={20}
              priority
              src="/icons/sac.svg"
              alt="SAC"
            />
          </i>
          SAC
        </h1>
        <p>Atendimento sobre ao seu pedido ou devolução.</p>
        <p>
          Todos os dias, de 08h às 16h <br />
          (incuindo domingos e feriados).
        </p>
      </div>
      <div>
        <h1>
          <i>
            <Image
              width={20}
              height={20}
              priority
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
            />
          </i>
          SAC
        </h1>
        <p>Personal Shopper</p>
        <p>
          Atendimento sobre os nossos produtos, dicas de looks e ajuda para
          comprar na e-store.
        </p>
        <p>Todos os dias de 08h às 16h.</p>
      </div>
    </section>
  );
};
