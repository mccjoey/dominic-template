import { Drawer } from "@mui/material";
import { BsChevronLeft } from "react-icons/bs";
import styles from "./styles.module.scss";

interface SubDrawerProps {
  children: string;
  isSubDrawerOpen: boolean;
  toggleSubDrawer: (
    state: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  title: string;
}

export const SubDrawer: React.FC<SubDrawerProps> = ({
  isSubDrawerOpen,
  toggleSubDrawer,
  children,
  title,
}) => {
  return (
    <Drawer
      anchor="left"
      open={isSubDrawerOpen}
      onClose={toggleSubDrawer(false)}
      className={styles.faqModal}
    >
      <header className={styles.subDrawerHeader}>
        <div className={styles.top} onClick={toggleSubDrawer(false)}>
          <BsChevronLeft /> <small>Voltar</small>
        </div>

        <div className={styles.bottom}>
          <h1>{title}</h1>
        </div>
      </header>
      <section
        className={styles.subDrawerContent}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </Drawer>
  );
};
