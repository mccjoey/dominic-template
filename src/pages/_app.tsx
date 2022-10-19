import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Footer } from "../components/Footer";
import useView from "../hooks/useView";
import ProgressBar from "react-progressbar-on-scroll";

import "../styles/global.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//DESKTOP

//MOBILE
import { FooterMobile } from "../views/mobile/components/Footer";
import { HeaderMobile } from "../views/mobile/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const { innerWidth = 0 } = useView();
  const { pathname } = useRouter();

  const nonPathsHeader: boolean = ["/colecoes/feed", "/produto"].includes(
    pathname
  );

  const nonPathsFooter: boolean = ["/colecoes/feed", "/produto"].includes(
    pathname
  );

  const pathsProgressPage: boolean = ["/produto"].includes(pathname);

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
        {pathsProgressPage && (
          <ProgressBar height={5} position="bottom" color="rgb(255, 72, 0)" />
        )}
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
