import type {
  NextPage,
} from "next";
import { useRouter } from "next/router";
import useView from "../../hooks/useView";
import { ProductDesktop } from "../../views/desktop/pages/Product";
import { ProductMobile } from "../../views/mobile/pages/Product";

const Product: NextPage = () => {
  const { innerWidth = 0 } = useView();
  const router = useRouter();

  console.log(router);

  if (innerWidth <= 780) {
    return <ProductMobile />;
  }

  return <ProductDesktop />;
};

export default Product;

