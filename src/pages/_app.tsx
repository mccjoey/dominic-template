import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Footer } from "../components/Footer";
import useView from "../hooks/useView";

import "../styles/global.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


//DESKTOP

//MOBILE
import { FooterMobile } from "../views/mobile/components/Footer";
import { HeaderMobile } from "../views/mobile/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const { innerWidth = 0 } = useView();
  const { pathname } = useRouter();
  
  const nonPathsHeader: boolean = ["/user/login", "/colecoes/feed", "/produto"].includes(
    pathname
  );

  const nonPathsFooter: boolean = ["/user/login", "/colecoes/feed", "/produto"].includes(
    pathname
  );
  
  const nonPathsFixedFooter: boolean = [
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
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
