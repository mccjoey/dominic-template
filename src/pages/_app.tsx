import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Footer } from "../components/Footer";
import useView from "../hooks/useView";

import "../styles/global.scss";

//DESKTOP

//MOBILE
import { FooterMobile } from "../views/mobile/components/Footer";
import { HeaderMobile } from "../views/mobile/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const { innerWidth = 0 } = useView();
  const { pathname } = useRouter();
  const nonPaths: boolean = ["/user/login", "/feed"].includes(pathname);

  if (innerWidth <= 780) {
    return (
      <Fragment>
        {!nonPaths && (
          <>
            <HeaderMobile />
          </>
        )}
        <Component {...pageProps} />
        {!nonPaths && (
          <>
            <Footer />
            <FooterMobile />
          </>
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
