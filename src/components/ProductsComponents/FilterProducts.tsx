import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { Accordion } from "./Accordion";
import { Slider } from "@mui/material";
import { Header } from "../../components/Header";

interface FilterProductsProps {
  setGridView: (state: number) => void;
}

export const FilterProducts: React.FC<FilterProductsProps> = ({
  setGridView,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const { pathname, query } = useRouter();

  return (
    <>
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
          <div className={styles.filter}  onClick={() => setIsFiltersOpen(true)}>
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
      {isFiltersOpen && (
        <Drawer
          open={isFiltersOpen}
          onClose={() => setIsFiltersOpen(false)}
          size="100%"
          direction="right"
          duration={0}
          className={styles.filtersDrawer}
        >
          <section className={styles.filterOptions}>
            <Header>
              <h1>Filtros</h1>
              <GrClose onClick={() => setIsFiltersOpen(false)} />
            </Header>

            <Accordion title="Cor">
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
              <p>
                <span></span>Amarelo
                <input type="checkbox" />
              </p>
            </Accordion>
            <Accordion title="Tipo de produto">
              <p>
                Malha
                <input type="checkbox" />
              </p>
              <p>
                Vestidos
                <input type="checkbox" />
              </p>
            </Accordion>
            <Accordion title="Tipo de manga">
              <p>
                Alças
                <input type="checkbox" />
              </p>
              <p>
                Manga Comprida
                <input type="checkbox" />
              </p>
              <p>
                Sem Manga
                <input type="checkbox" />
              </p>
            </Accordion>
            <Accordion title="Longitude">
              <p>
                Curto
                <input type="checkbox" />
              </p>
              <p>
                Longo
                <input type="checkbox" />
              </p>
              <p>
                Midi
                <input type="checkbox" />
              </p>
            </Accordion>
            <Accordion title="Tamanho">
              <p>
                PP
                <input type="checkbox" />
              </p>
              <p>
                P
                <input type="checkbox" />
              </p>
              <p>
                M
                <input type="checkbox" />
              </p>
              <p>
                G
                <input type="checkbox" />
              </p>
              <p>
                GG
                <input type="checkbox" />
              </p>
            </Accordion>
            <Accordion title="Materiais (2)">
              <p>
                Aldodão
                <input type="checkbox" />
              </p>
              <p>
                Cetim
                <input type="checkbox" />
              </p>
              <p>
                Crochê
                <input type="checkbox" />
              </p>
              <p>
                Linho
                <input type="checkbox" />
              </p>
              <p>
                Veludo
                <input type="checkbox" />
              </p>
            </Accordion>
            <Accordion title="Preço">
              <small>R$0</small>
              <Slider
                defaultValue={20}
                getAriaValueText={(value) => `R$${value}`}
                step={50}
                valueLabelDisplay="on"
                min={0}
                max={500}
                sx={{ color: "#000" }}
              />
              <small>R$500+</small>
            </Accordion>
            <div className={styles.checkbox}>
              <small>Sustentável</small>
              <input type="checkbox" />
            </div>
          </section>
          <section className={styles.filterActions}>
            <p>Ver resultados 814</p>
            <p>Limpar</p>
          </section>
        </Drawer>
      )}
    </>
  );
};
