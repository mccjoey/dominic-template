import styles from "./styles.module.scss";
import Image from "next/future/image";
import useHeaderState from "../../../../hooks/useHeaderState";
import { CartDrawer } from "../CartDrawer";
import { useCallback, useEffect, useState } from "react";
import useShowFooter from "../../../../hooks/useShowFooter";
import { Faq } from "./FAQ";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { GrClose } from "react-icons/gr";

export const HeaderMobile: React.FC = () => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState<boolean>(false);
  const [isHeaderSearchOpen, setIsHeaderSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);
  const headerState = useHeaderState();
  const showFooter = useShowFooter();

  const toggleCart = useCallback(() => {
    if (isHeaderMenuOpen || isHeaderSearchOpen) {
      setIsCartOpen(!isCartOpen);
      setIsHeaderMenuOpen(false);
      return setIsHeaderSearchOpen(false);
    }
    return setIsCartOpen(!isCartOpen);
  }, [isCartOpen, isHeaderMenuOpen, isHeaderSearchOpen]);

  const toggleSearch = useCallback(() => {
    if (isHeaderMenuOpen) {
      setIsHeaderMenuOpen(false);
      return setIsHeaderSearchOpen(!isHeaderSearchOpen);
    }
    return setIsHeaderSearchOpen(!isHeaderSearchOpen);
  }, [isHeaderMenuOpen, isHeaderSearchOpen]);

  const toggleMenu = useCallback(() => {
    if (isHeaderSearchOpen) {
      setIsHeaderSearchOpen(false);
      return setIsHeaderMenuOpen(!isHeaderMenuOpen);
    }
    return setIsHeaderMenuOpen(!isHeaderMenuOpen);
  }, [isHeaderMenuOpen, isHeaderSearchOpen]);

  useEffect(() => {
    if (isHeaderMenuOpen || isHeaderSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHeaderMenuOpen, isHeaderSearchOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${
          styles[showFooter && headerState ? "sticky" : "transparent"]
        } ${(isHeaderMenuOpen || isHeaderSearchOpen) && styles.open}`}
      >
        <div className={styles.content}>
          <div
            onClick={toggleMenu}
            className={`${styles.headerMenu} ${
              isHeaderMenuOpen && styles.open
            }`}
          >
            <nav className={`${styles.menuBurguer} ${styles.open}`} />
          </div>
          <h1 className={styles.headerTitle}>Título</h1>
          <div className={styles.headerNav}>
            {isHeaderSearchOpen ? (
              <GrClose onClick={toggleSearch} />
            ) : (
              <Image
                width={32}
                height={32}
                src="/icons/search.svg"
                priority
                alt="Pesquisar"
                onClick={toggleSearch}
              />
            )}

            <Image
              width={32}
              height={32}
              src="/icons/cart.svg"
              priority
              alt="Carrinho"
              onClick={toggleCart}
            />
          </div>
        </div>
        {isHeaderMenuOpen && (
          <Menu setIsFaqOpen={setIsFaqOpen} setIsHeaderMenuOpen={toggleMenu} />
        )}
        {isHeaderSearchOpen && <Search />}
      </header>
      <CartDrawer isOpen={isCartOpen} setIsOpen={toggleCart} />
      <Faq isFaqOpen={isFaqOpen} setIsFaqOpen={setIsFaqOpen} />
    </>
  );
};
