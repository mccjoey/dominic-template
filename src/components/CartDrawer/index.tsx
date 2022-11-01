import styles from "./styles.module.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GrClose } from "react-icons/gr";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CartTabContent } from "./CartTabContent";
import { FavoriteTabContent } from "./FavoriteTabContent";
import { Header } from "../Header";
import { useMenuStore } from "../../store/stores";
import { useEffect } from "react";

interface CartDrawerProps {
  isOpen: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen }) => {
  const { toggleCart } = useMenuStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Drawer open={isOpen} onClose={toggleCart} direction="right" className={styles.cartModal}>
      <section className={styles.cartContent}>
        <Header>
          <GrClose className={styles.closeModal} onClick={toggleCart} />
        </Header>
        <Tabs defaultIndex={1}>
          <TabList className={styles.header}>
            <Tab className={styles.title}>Lista de desejos (2)</Tab>
            <Tab className={styles.title}>Carrinho (3)</Tab>
          </TabList>

          <TabPanel>
            <FavoriteTabContent />
          </TabPanel>
          <TabPanel>
            <CartTabContent />
          </TabPanel>
        </Tabs>
      </section>
    </Drawer>
  );
};
