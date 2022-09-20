import Image from "next/future/image";
import { ProductsList } from "./ProductsList";
import styles from "./styles.module.scss";

export const Search = () => {
  return (
    <section className={styles.searchContent}>
      <div className={styles.searchInput}>
        <input type="search" placeholder="Digite aqui para procurar" />
        <Image
          width={32}
          height={32}
          src="/icons/search.svg"
          priority
          alt="Pesquisar"
        />
      </div>
      <ProductsList  />
    </section>
  );
};
