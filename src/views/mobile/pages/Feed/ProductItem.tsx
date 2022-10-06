import Image from "next/future/image";
import styles from "./styles.module.scss";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { SelectSizeSheet } from "../../../../components/SelectSizeSheet";

interface ProductItemProps {
  setOpen: (state: boolean) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({ setOpen }) => {
  const [sizesDrawer, setSizesDrawer] = useState<boolean>(false);
  const { push: route } = useRouter();
  const toggleSizesDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setSizesDrawer(open);
    };

  return (
    <>
      <div className={styles.productItem}>
        <Image
          src="/images/placeholder_product.webp"
          loading="lazy"
          width={1800}
          height={2700}
          alt="banner"
          onClick={() => {
            setOpen(false);
            route("/produto");
          }}
        />
        <div className={styles.productInfo}>
          <p className={styles.productName}>Blusa Poá Gola Torcida - Preto</p>
          <small className={styles.productPrice}>R$139,00</small>
          <small className={styles.productInterest}>3x de R$46,33</small>
          <button onClick={() => setSizesDrawer(true)}>
            Selecionar tamanho
          </button>
        </div>
      </div>
      <SelectSizeSheet open={sizesDrawer} setOpen={setSizesDrawer} />
    </>
  );
};
