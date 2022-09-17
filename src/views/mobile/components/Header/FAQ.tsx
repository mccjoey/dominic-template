import { Drawer } from "@mui/material";
import styles from "./styles.module.scss";

interface FaqProps {
  isFaqOpen: boolean;
  setIsFaqOpen: (state: boolean) => void;
}

export const Faq: React.FC<FaqProps> = ({ isFaqOpen, setIsFaqOpen }) => {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsFaqOpen(open);
    };

  return (
    <Drawer
      anchor="left"
      open={isFaqOpen}
      onClose={toggleDrawer(false)}
      className={styles.faqModal}
    >
      <section>Faq Modal</section>
    </Drawer>
  );
};
