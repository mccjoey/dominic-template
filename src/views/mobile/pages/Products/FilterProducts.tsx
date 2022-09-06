import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface FilterProductsProps {
  setGridView: (state: number) => void;
}

export const FilterProducts: React.FC<FilterProductsProps> = ({
  setGridView,
}) => {
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
          scroll={false}
        >
          <small className={`${query.tamanho === "PP" && styles.active}`}>
            PP
          </small>
        </Link>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "P" },
          }}
          scroll={false}
        >
          <small className={`${query.tamanho === "P" && styles.active}`}>
            P
          </small>
        </Link>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "M" },
          }}
          scroll={false}
        >
          <small className={`${query.tamanho === "M" && styles.active}`}>
            M
          </small>
        </Link>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "G" },
          }}
          scroll={false}
        >
          <small className={`${query.tamanho === "G" && styles.active}`}>
            G
          </small>
        </Link>
        <Link
          href={{
            pathname: pathname,
            query: { ...query, tamanho: "GG" },
          }}
          scroll={false}
        >
          <small className={`${query.tamanho === "GG" && styles.active}`}>
            GG
          </small>
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
            onClick={() => setGridView(2)}
          />
          <Image
            width={32}
            height={32}
            src="/icons/single_view.svg"
            priority
            alt="Home"
            onClick={() => setGridView(1)}
          />
        </div>
      </div>
    </section>
  );
};
