import styles from "./styles.module.scss";
import type { NextPage } from "next";
import { CollectionItem } from "../../components/CollectionItem";

const Collections: NextPage = () => {
  return (
    <main className={styles.collectionsPage}>
      <section className={styles.content}>
        {Array.from({ length: 4 }).map((item, index) => (
          <CollectionItem key={`Collection-${index}`} />
        ))}
      </section>
    </main>
  );
};

export default Collections;
