import type { NextPage } from "next";
import useView from "../../hooks/useView";
import ProductsDesktop from "../../views/desktop/pages/Products";
import { ProductsMobile } from "../../views/mobile/pages/Products";

const Products: NextPage = () => {
  const { innerWidth = 0 } = useView();

  if (innerWidth <= 780) {
    return <ProductsMobile />;
  }

  return <ProductsDesktop />;
};

export default Products;
