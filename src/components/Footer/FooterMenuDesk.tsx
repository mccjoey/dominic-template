import styles from "./styles.module.scss";

export const FooterMenuDesk = () => {
  return (
    <>
      <section className={styles.footerMenuDesk}>
        <ul>
          <h1>Institucional</h1>
          <li>Sobre a marca</li>
          <li>Sobre a Animale ORO</li>
          <li>Sobre a Animale Jeans</li>
          <li>Aplicativo Animale</li>
          <li>Animale Vintage Revenda</li>
          <li>Sustentabilidade e Transparência</li>
          <li>Grupo Soma</li>
          <li>Fornecedores</li>
          <li>Representantes Animale</li>
          <li>Trabalhe Conosco</li>
          <li>Política de Funcionários</li>
          <li>Aviso de Privacidade</li>
        </ul>
      </section>
      <section className={styles.footerMenuDesk}>
       
        <ul>
          <h1>Minha conta</h1>
          <li>Minha Conta</li>
          <li>Meus Pedidos</li>
          <li>Devolução</li>
          <li>Wishlist</li>
        </ul>

        <ul>
          <h1>Ajuda</h1>
          <li>Como Comprar</li>
          <li>Entrega</li>
          <li>Troca e Devolução</li>
          <li>Formas de Pagamento</li>
          <li>Perguntas Frequentes</li>
        </ul>
      </section>
    </>
  );
};
