import styles from "./styles.module.scss";
import Image from "next/future/image";
import useHeaderState from "../../../../hooks/useHeaderState";
import { CartDrawer } from "../CartDrawer";
import { BaseSyntheticEvent, useCallback, useEffect, useState } from "react";
import useShowFooter from "../../../../hooks/useShowFooter";
import { BsChevronRight } from "react-icons/bs";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Faq } from "./FAQ";

export const HeaderMobile: React.FC = () => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);
  const headerState = useHeaderState();
  const showFooter = useShowFooter();

  const handleOpenSubmenu = (e: BaseSyntheticEvent) => {
    if (e.target.parentElement.dataset.hasubmenu) {
      e.target.parentElement.classList.toggle("open");
    }
  };

  const handleMenuCart = useCallback(() => {
    setIsHeaderMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isHeaderMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHeaderMenuOpen]);

  useEffect(() => {
    if (isCartOpen) {
      handleMenuCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCartOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${
          styles[showFooter && headerState ? "sticky" : "transparent"]
        } ${isHeaderMenuOpen && styles.open}`}
      >
        <div className={styles.content}>
          <div
            onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}
            className={`${styles.headerMenu} ${
              isHeaderMenuOpen && styles.open
            }`}
          >
            <nav className={`${styles.menuBurguer} ${styles.open}`} />
          </div>
          <h1 className={styles.headerTitle}>Título</h1>
          <div className={styles.headerNav}>
            <Image
              width={32}
              height={32}
              src="/icons/search.svg"
              priority
              alt="Pesquisar"
            />
            <Image
              width={32}
              height={32}
              src="/icons/cart.svg"
              priority
              alt="Carrinho"
              onClick={() => setIsCartOpen(true)}
            />
          </div>
        </div>
        {isHeaderMenuOpen && (
          <ul className={styles.menuContent}>
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
            <Accordion className={styles.accordion}>
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
        )}
      </header>
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      <Faq isFaqOpen={isFaqOpen} setIsFaqOpen={setIsFaqOpen} />
    </>
  );
};
