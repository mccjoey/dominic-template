import styles from "./styles.module.scss";
import { IoIosMenu } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingBasket } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.headerMenu}>
          <IoIosMenu />
        </div>
        <h1 className={styles.headerTitle}>Título</h1>
        <div className={styles.headerNav}>
          <BsSearch />
          <MdOutlineShoppingBasket />
        </div>
      </div>
    </header>
  );
};
