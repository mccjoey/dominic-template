import { BsPause, BsPlay, BsTruck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GoIssueReopened } from "react-icons/go";
import styles from "./styles.module.scss";
import { useState } from "react";

export const FadeInContent = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  return (
    <section className={styles.fadeInContent}>
      {isPlaying ? (
        <BsPause onClick={() => setIsPlaying(!isPlaying)} />
      ) : (
        <BsPlay onClick={() => setIsPlaying(!isPlaying)} />
      )}

      <div className={styles.features}>
        <div className={`${styles.marquee} ${!isPlaying && styles.pause}`}>
          <p>
            <BsTruck />
            Frete grátis em compras acima de R$499
          </p>
          <p>
            <GoIssueReopened />7 dias corridos para devolução após o recebimento
            do produto
          </p>
          <p>
            <RiSecurePaymentLine />
            Segurança processo de compra 100% segura
          </p>
        </div>
      </div>
    </section>
  );
};
