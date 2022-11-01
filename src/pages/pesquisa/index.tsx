import styles from "./styles.module.scss";
import { NextPage } from "next";
import { useRouter } from "next/router";

const SearchPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <main className={styles.searchPage}>
      <div className={styles.content}>Pesquisa: {query?.s}</div>
    </main>
  );
};

export default SearchPage;
