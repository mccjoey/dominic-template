import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </Fragment>
  );
}

export default MyApp;
