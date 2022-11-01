import styles from "./styles.module.scss";
import Image from "next/image";
import useHeaderState from "../../../../hooks/useHeaderState";
import { CartDrawer } from "../../../../components/CartDrawer";
import { Fragment, useCallback, useEffect, useState } from "react";
import useShowFooter from "../../../../hooks/useShowFooter";
import { Faq } from "./FAQ";
import { Menu } from "./Menu";
import { Search } from "../../../../components/SearchMenu";
import { GrClose } from "react-icons/gr";
import { Header } from "../../../../components/Header";
import { useRouter } from "next/router";
import { useMenuStore } from "../../../../store/stores";

export const HeaderMobile: React.FC = () => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState<boolean>(false);
  const [isHeaderSearchOpen, setIsHeaderSearchOpen] = useState<boolean>(false);
  const [isFaqOpen, setIsFaqOpen] = useState<boolean>(false);
  const headerState = useHeaderState();
  const showFooter = useShowFooter();
  const { push: route } = useRouter();
  const {
    toggleCart: setCart,
    cart,
    toggleSearchMenu,
    searchMenu,
  } = useMenuStore();

  const toggleCart = useCallback(() => {
    if (isHeaderMenuOpen || searchMenu) {
      setCart();
      setIsHeaderMenuOpen(false);
      return setIsHeaderSearchOpen(false);
    }
    return setCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, isHeaderMenuOpen, searchMenu]);

  const toggleSearch = useCallback(() => {
    if (isHeaderMenuOpen) {
      setIsHeaderMenuOpen(false);
      return toggleSearchMenu();
    }
    return toggleSearchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHeaderMenuOpen, searchMenu]);

  const toggleMenu = useCallback(() => {
    if (searchMenu) {
      toggleSearchMenu();
      return setIsHeaderMenuOpen(!isHeaderMenuOpen);
    }
    return setIsHeaderMenuOpen(!isHeaderMenuOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHeaderMenuOpen, searchMenu]);

  useEffect(() => {
    if (isHeaderMenuOpen || searchMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHeaderMenuOpen, searchMenu]);

  return (
    <Fragment>
      <Header
        className={`${styles.mainHeader} ${
          styles[showFooter && headerState ? "sticky" : "transparent"]
        } ${(isHeaderMenuOpen || searchMenu) && styles.open}`}
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
          <Image
            width={980}
            height={166.04}
            src="/images/logo_black.svg"
            priority
            alt="Logo"
            className={styles.logo}
            onClick={() => route("/")}
          />
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

            <div>
              <Image
                width={32}
                height={32}
                src="/icons/cart.svg"
                priority
                alt="Carrinho"
                onClick={toggleCart}
              />
              <small>73</small>
            </div>
          </div>
        </div>
      </Header>
      <Menu
        isOpen={isHeaderMenuOpen}
        setIsOpen={setIsHeaderMenuOpen}
        setIsFaqOpen={setIsFaqOpen}
        setIsHeaderMenuOpen={toggleMenu}
      />
      <Faq isFaqOpen={isFaqOpen} setIsFaqOpen={setIsFaqOpen} />
    </Fragment>
  );
};
