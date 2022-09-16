import { Accordions } from "./Accordions";
import { Apps } from "./Apps";
import { Bottom } from "./Bottom";
import { Certificates } from "./Certificates";
import { FadeInContent } from "./FadeInContent";
import { Newsletter } from "./Newsletter";
import { PaymentsMethods } from "./PaymentMethods";
import { Sac } from "./Sac";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FadeInContent />
      <Newsletter/>
      <Accordions />
      <Sac />
      <PaymentsMethods />
      <Certificates />
      <Apps />
      <Bottom />
    </footer>
  );
};
