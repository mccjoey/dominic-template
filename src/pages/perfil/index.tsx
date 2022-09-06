import type { NextPage } from "next";
import useView from "../../hooks/useView";
import PerfilDesktop from "../../views/desktop/pages/Perfil";
import { PerfilMobile } from "../../views/mobile/pages/Perfil";

const Perfil: NextPage = () => {
  const { innerWidth = 0 } = useView();

  if (innerWidth <= 780) {
    return <PerfilMobile />;
  }

  return <PerfilDesktop />;
};

export default Perfil;
