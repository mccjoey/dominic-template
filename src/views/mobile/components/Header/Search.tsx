import Drawer from "react-modern-drawer";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { ProductsList } from "./ProductsList";
import "react-modern-drawer/dist/index.css";
import styles from "./styles.module.scss";
import { Header } from "../../../../components/Header";

interface SearchProps {
  isOpen: boolean;
  setIsOpen: (state?: boolean | any) => void;
}

export const Search: React.FC<SearchProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={setIsOpen}
      size="100%"
      direction="right"
      duration={0}
      className={styles.searchDrawer}
    >
      <section className={styles.searchContent}>
        <Header>
          <GrClose onClick={() => setIsOpen(false)} />
        </Header>
        <h1>Search</h1>
        <div className={styles.searchInput}>
          <input type="search" placeholder="Digite aqui para procurar" />
          <FiSearch />
        </div>
        <div className={styles.searchTerms}>
          <h1>Popular search terms</h1>
          <ul>
            <li>#Vestidos</li>
            <li>#Blazers</li>
            <li>#Conjuntos</li>
            <li>#Cropped</li>
            <li>#Off-White</li>
          </ul>
        </div>
        <ProductsList />
      </section>
    </Drawer>
  );
};
