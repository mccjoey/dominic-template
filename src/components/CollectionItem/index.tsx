import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export const CollectionItem = () => {
  const { push: route } = useRouter();

  return (
    <div className={styles.collectionItem}>
      <Image
        width={1100}
        height={1200}
        src="/images/collectionBanner.jpeg"
        priority
        alt="Coleção"
        onClick={() => route("/colecoes/feed")}
      />
      <p className={styles.category}>Moda Feminina</p>
      <p className={styles.name}>Coleção Outono-Inverno 2022-2023</p>
      <button onClick={() => route("/colecoes/feed")}>Descobrir</button>
    </div>
  );
};
