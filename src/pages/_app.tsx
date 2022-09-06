import type { AppProps } from "next/app";
import { Fragment } from "react";
import useView from "../hooks/useView";

import "../styles/global.scss";



//DESKTOP

//MOBILE
import { FooterMobile } from "../views/mobile/components/Footer";
import { HeaderMobile } from "../views/mobile/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const { innerWidth = 0 } = useView();

  if (innerWidth <= 780) {
    return (
      <Fragment>
        <HeaderMobile />
        <Component {...pageProps} />
        <FooterMobile />
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