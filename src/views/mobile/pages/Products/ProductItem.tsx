import Image from "next/future/image";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import { Fragment, useState } from "react";
import { Drawer } from "@mui/material";
import Link from "next/link";

interface ProductItemProps {
  gridView: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({ gridView }) => {
  const [sizesDrawer, setSizesDrawer] = useState<boolean>(false);

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
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <div className={styles.productItem}>
        <Slider className={styles.productSlider} {...sliderSettings}>
          {Array.from({ length: 4 }).map((product, index) => (
            <div className={styles.productImage} key={`ProductSlide${index}`}>
              <Link href="/produto">
                <Image
                  src="/images/placeholder_product.webp"
                  loading="lazy"
                  width={1800}
                  height={2700}
                  alt="Produto"
                />
              </Link>
            </div>
          ))}
        </Slider>
        <p className={styles.productName}>Blusa Poá Gola Torcida - Preto</p>
        <small className={styles.productPrice}>R$139,00</small>
        <small className={styles.productInterest}>3x de R$46,33</small>
        {gridView === 1 && (
          <button onClick={toggleSizesDrawer(true)}>Selecionar Tamanho</button>
        )}
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
    </Fragment>
  );
};
