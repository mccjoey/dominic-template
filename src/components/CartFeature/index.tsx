import styles from "./styles.module.scss";

export const CartFeature = () => {
  return <section className={styles.cartFeature}>
    <div className={styles.content}>
        <h1>Brinde + frete grátis</h1>
        <p>Para compras acima de R$200</p>
        <p>Faltam R$20,00 para ganhar seu prêmio</p>
    </div>
  </section>;
};
