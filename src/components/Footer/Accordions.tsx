import styles from "./styles.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Accordions = () => {
  return (
    <section className={styles.accordions}>
      <Accordion disableGutters className={styles.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Institucional
        </AccordionSummary>
        <AccordionDetails>
          <ul>
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
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className={styles.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Minha conta
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Devolução</li>
            <li>Wishlist</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className={styles.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Ajuda
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Como Comprar</li>
            <li>Entrega</li>
            <li>Troca e Devolução</li>
            <li>Formas de Pagamento</li>
            <li>Perguntas Frequentes</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};
