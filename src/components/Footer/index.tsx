import useView from "../../hooks/useView";
import { Accordions } from "./Accordions";
import { Apps } from "./Apps";
import { Bottom } from "./Bottom";
import { Certificates } from "./Certificates";
import { FadeInContent } from "./FadeInContent";
import { FooterMenuDesk } from "./FooterMenuDesk";
import { Newsletter } from "./Newsletter";
import { PaymentsMethods } from "./PaymentMethods";
import { Sac } from "./Sac";
import styles from "./styles.module.scss";

export const Footer = () => {
  const { innerWidth = 0 } = useView();
  return (
    <footer className={styles.footer}>
      <FadeInContent />
      <Newsletter />
      {innerWidth <= 780 ? <Accordions /> : <FooterMenuDesk />}
      <Sac />
      <PaymentsMethods />
      <Certificates />
      <Apps />
      <Bottom />
    </footer>
  );
};
