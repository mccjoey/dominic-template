import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Footer } from "../components/Footer";
import useView from "../hooks/useView";
import ProgressBar from "react-progressbar-on-scroll";

import "../styles/global.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//DESKTOP
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

//MOBILE
import { FooterMobile } from "../views/mobile/components/Footer";
import { HeaderMobile } from "../views/mobile/components/Header";
import { HeaderDesk } from "../views/desktop/components/HeaderDesk";
import { CartDrawer } from "../components/CartDrawer";
import { useMenuStore } from "../store/stores";
import { Search } from "../components/SearchMenu";

function MyApp({ Component, pageProps }: AppProps) {
  const { innerWidth = 0 } = useView();
  const { pathname } = useRouter();
  const { cart, searchMenu } = useMenuStore();

  const nonPathsHeader: boolean = ["/colecoes/feed", "/produto"].includes(
    pathname
  );
  const nonPathsDeskHeader: boolean = ["/colecoes/feed"].includes(pathname);

  const nonPathsFooter: boolean = ["/colecoes/feed", "/produto"].includes(
    pathname
  );

  const pathsProgressPage: boolean = ["/produto"].includes(pathname);

  const nonPathsFixedFooter: boolean = [
    "/user/login",
    "/colecoes/feed",
  ].includes(pathname);
  const nonPathsDeskFixedFooter: boolean = [
    "/user/login",
    "/colecoes/feed",
  ].includes(pathname);

  if (innerWidth <= 780) {
    return (
      <Fragment>
        {!nonPathsHeader && <HeaderMobile />}
        <Component {...pageProps} />
        {!nonPathsFooter && <FooterMobile />}
        {!nonPathsFixedFooter && <Footer />}
        {pathsProgressPage && (
          <ProgressBar height={5} position="bottom" color="rgb(255, 72, 0)" />
        )}
        <CartDrawer isOpen={cart}  />
        <Search isOpen={searchMenu} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      {!nonPathsDeskHeader && <HeaderDesk />}
      <Component {...pageProps} />
      {!nonPathsDeskFixedFooter && <Footer />}
      <CartDrawer isOpen={cart}  />
      <Search isOpen={searchMenu} />
    </Fragment>
  );
}

export default MyApp;
