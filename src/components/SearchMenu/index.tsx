import Drawer from "react-modern-drawer";
import { FiSearch } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import "react-modern-drawer/dist/index.css";
import styles from "./styles.module.scss";
import { Header } from "../Header";
import { useMenuStore } from "../../store/stores";
import { ChangeEvent, useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";
import { useRouter } from "next/router";

interface SearchProps {
  isOpen: boolean;
}

export const Search: React.FC<SearchProps> = ({ isOpen }) => {
  const [searchInput, setSearchInput] = useState("");
  const { push: route } = useRouter();
  const { toggleSearchMenu } = useMenuStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <Drawer
      open={isOpen}
      onClose={toggleSearchMenu}
      size="100%"
      direction="right"
      duration={0}
      className={styles.searchDrawer}
    >
      <section className={styles.searchContent}>
        <Header>
          <GrClose onClick={toggleSearchMenu} />
        </Header>
        <h1>Search</h1>
        <div className={styles.searchInput}>
          <input
            type="search"
            placeholder="Digite aqui para procurar"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyUp={(e) =>
              e.code == "Enter" &&
              route({
                pathname: "pesquisa",
                query: {
                  s: searchInput,
                },
              })
            }
          />

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
