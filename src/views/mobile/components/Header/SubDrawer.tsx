import { Drawer } from "@mui/material";
import { useCallback } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Header } from "../../../../components/Header";
import styles from "./styles.module.scss";

interface SubDrawerProps {
  children: string;
  isSubDrawerOpen: boolean;
  setIsFaqOpen: (state: boolean) => void;
  setIsSubDrawerOpen: (state: boolean) => void;
  toggleSubDrawer: (
    state: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  title: string;
}

export const SubDrawer: React.FC<SubDrawerProps> = ({
  isSubDrawerOpen,
  toggleSubDrawer,
  setIsFaqOpen,
  setIsSubDrawerOpen,
  children,
  title,
}) => {
  const toggleAll = useCallback(() => {
    setIsFaqOpen(false);
    setIsSubDrawerOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Drawer
      anchor="left"
      open={isSubDrawerOpen}
      onClose={toggleSubDrawer(false)}
      className={styles.faqModal}
      transitionDuration={0}
    >
      <Header className={styles.subDrawerHeader}>
        <div onClick={toggleSubDrawer(false)}>
          <BsChevronLeft />
        </div>
        <h1>Dúvidas</h1>
        <GrClose onClick={toggleAll} />
      </Header>
      <h1 className={styles.subDrawerTitle}>{title}</h1>
      <section
        className={styles.subDrawerContent}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    </Drawer>
  );
};
