import styles from "./styles.module.scss";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { BaseSyntheticEvent } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (state?: boolean | any) => void;
  setIsFaqOpen: (state?: boolean | any) => void;
  setIsHeaderMenuOpen: (state?: boolean | any) => void;
}

export const Menu: React.FC<MenuProps> = ({
  isOpen,
  setIsOpen,
  setIsFaqOpen,
  setIsHeaderMenuOpen,
}) => {
  const { push: route, pathname, asPath } = useRouter();
  const handleOpenSubmenu = (e: BaseSyntheticEvent) => {
    if (e.target.parentElement.dataset.hasubmenu) {
      e.target.parentElement.classList.toggle("open");
    }
  };

  const regex = new RegExp("/produto");
  const regex2 = new RegExp("/colecoes/feed");

  return (
    <Drawer
      open={isOpen}
      onClose={setIsOpen}
      size="100%"
      direction="left"
      duration={300}
      className={styles.menuDrawer}
    >
      <section className={styles.menuContent}>
        {pathname !== "/produtos" && (regex.test(pathname) || regex2.test(pathname)) && (
          <GrClose
            className={styles.closeModalProduct}
            onClick={() => setIsOpen(false)}
          />
        )}

        <ul>
          <li data-hasubmenu="true">
            <small onClick={handleOpenSubmenu}>Novidades</small>
            <BsChevronRight />
            <ul className={styles.subMenu}>
              <li data-hasubmenu="true">
                <small onClick={handleOpenSubmenu}>All new</small>
                <BsChevronRight />
                <ul className={styles.subMenu}>
                  <li>
                    <small>All new</small>
                    <BsChevronRight />
                  </li>
                  <li>
                    <small>All new</small>
                    <BsChevronRight />
                  </li>
                  <li>
                    <small>All new</small>
                    <BsChevronRight />
                  </li>
                </ul>
              </li>
              <li>
                <small>Women</small>
                <BsChevronRight />
              </li>
              <li>
                <small>Man</small>
                <BsChevronRight />
              </li>
            </ul>
          </li>
          <Accordion disableGutters className={styles.accordion}>
            <AccordionSummary expandIcon={<BsChevronRight />}>
              Coleção
            </AccordionSummary>
            <AccordionDetails>
              <section>
                <Image
                  src="/images/placeholder_product.webp"
                  loading="lazy"
                  width={1800}
                  height={2700}
                  alt="Produto"
                />
                <Image
                  src="/images/placeholder_product.webp"
                  loading="lazy"
                  width={1800}
                  height={2700}
                  alt="Produto"
                />
              </section>
            </AccordionDetails>
          </Accordion>
          <li>
            <small>Roupas</small>
            <BsChevronRight />
          </li>
          <li>
            <small>Promoção</small>
            <BsChevronRight />
          </li>
          <div className={styles.divider} />
          <li>
            <small>Blog</small>
          </li>

          <div className={styles.divider} />
          <li>
            <small>Sobre Nós</small>
          </li>
          <li>
            <small>Rastrear Pedidos</small>
          </li>
          <li>
            <small>Trocas e Devolução</small>
          </li>
          <li
            onClick={() => {
              setIsFaqOpen(true);
              setIsHeaderMenuOpen(false);
            }}
          >
            <small>Dúvidas</small>
          </li>
        </ul>
        <section className={styles.bottom}>
          <button
            onClick={() => {
              setIsOpen(false);
              route("/user/login");
            }}
          >
            Início
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              route("/user/login");
            }}
          >
            Minha Conta
          </button>
        </section>
      </section>
    </Drawer>
  );
};
