import Image from "next/future/image";
import styles from "./styles.module.scss";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

export const ProductItem = () => {
  const [sizesDrawer, setSizesDrawer] = useState<boolean>(false);
  const {push: route} = useRouter();
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
          onClick={() => route("/produto") }
        />
        <div className={styles.productInfo}>
          <p className={styles.productName}>Blusa Poá Gola Torcida - Preto</p>
          <small className={styles.productPrice}>R$139,00</small>
          <small className={styles.productInterest}>3x de R$46,33</small>
          <button onClick={()=> setSizesDrawer(true)}>Selecionar tamanho</button>
        </div>
      </div>
      <Drawer
        anchor="bottom"
        open={sizesDrawer}
        onClose={toggleSizesDrawer(false)}
        className={styles.sizesDrawer}
      >
        <section>
          <h1>Selecione seu tamanho</h1>
          <ul>
            <li>
              PP <small className={styles.warn}>Last feel items</small>
            </li>
            <li>P</li>
            <li>M</li>
            <li>
              G
              <small className={styles.noItems}>Not available I want it!</small>
            </li>
            <li>
              GG
              <small className={styles.estimated}>
                Estimated shipment in 8 business days
              </small>
            </li>
          </ul>
          <div className={styles.sizesDrawerbottom}>
            <button>Encontre seu tamanho</button>
            <button>Guia de Tamanhos</button>
          </div>
        </section>
      </Drawer>
    </>
  );
};
