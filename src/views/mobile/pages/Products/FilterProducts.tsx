import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
export const FilterProducts = () => {
  const { pathname, query } = useRouter();

  return (
    <section className={styles.filterProducts}>
      <h1>SHOP BY SIZE</h1>
      <div className={styles.sizeList}>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "PP" },
          }}
        >
          <small>PP</small>
        </Link>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "P" },
          }}
        >
          <small>P</small>
        </Link>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "M" },
          }}
        >
          <small>M</small>
        </Link>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "G" },
          }}
        >
          <small>G</small>
        </Link>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "GG" },
          }}
        >
          <small>GG</small>
        </Link>
      </div>
      <div className={styles.filterMenu}>
        <div className={styles.filter}>       
          <Image
            width={32}
            height={32}
            src="/icons/filter.svg"
            priority
            alt="Home"
          />
          <small>Filtro</small>
        </div>
        <div className={styles.filterView}>       
          <Image
            width={32}
            height={32}
            src="/icons/grid_view.svg"
            priority
            alt="Home"
          />
          <Image
            width={32}
            height={32}
            src="/icons/single_view.svg"
            priority
            alt="Home"
          />
        </div>
      </div>
    </section>
  );
};
