import type { NextPage } from "next";
import useView from "../../hooks/useView";
import { ProductDesktop } from "../../views/desktop/pages/Product";
import { ProductMobile } from "../../views/mobile/pages/Product";

const Product: NextPage = () => {
  const { innerWidth = 0 } = useView();

  if (innerWidth <= 780) {
    return <ProductMobile />;
  }

  return <ProductDesktop />;
};

export default Product;
