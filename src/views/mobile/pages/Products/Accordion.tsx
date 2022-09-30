import styles from "./styles.module.scss";
import Accordionn from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";

interface AccordionProps {
  children?: ReactNode;
  title: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  return (
    <Accordionn className={styles.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <section className={styles[title]}>{children}</section>
      </AccordionDetails>
    </Accordionn>
  );
};
