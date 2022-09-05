import type { NextPage } from "next";
import useView from "../hooks/useView";
import HomeDesktop from "../views/desktop/pages/Home";
import HomeMobile from "../views/mobile/pages/Home";

const Home: NextPage = () => {
  const { innerWidth = 0 } = useView();

  if (innerWidth <= 780) {
    return <HomeMobile />;
  }

  return <HomeDesktop />;
};

export default Home;
