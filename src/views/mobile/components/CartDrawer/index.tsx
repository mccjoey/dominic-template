import styles from "./styles.module.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ProductItem } from "./ProductItem";
import { GrClose } from "react-icons/gr";
import { FavoritedProductItem } from "./FavoritedProductItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CartTabContent } from "./CartTabContent";
import { FavoriteTabContent } from "./FavoriteTabContent";

interface CartDrawerProps {
  isOpen: boolean;
  setIsOpen: (state?: boolean | any) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Drawer open={isOpen} onClose={setIsOpen} direction="right" size="95%">
      <section className={styles.cartContent}>
        <GrClose
          className={styles.closeModal}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Tabs defaultIndex={1}>
          <TabList className={styles.header}>
            <Tab className={styles.title}>Lista de desejos (2)</Tab>
            <Tab className={styles.title} >
              Carrinho (3)
            </Tab>
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
