import Image from "next/image";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import { Fragment, useState } from "react";
import Link from "next/link";
import { SelectSizeSheet } from "../../components/SelectSizeSheet";

interface ProductItemProps {
  gridView: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({ gridView }) => {
  const [sizesDrawer, setSizesDrawer] = useState<boolean>(false);

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
              <Link href="/produto" rel="noopener noreferrer">
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
          <button onClick={() => setSizesDrawer(true)}>
            Selecionar Tamanho
          </button>
        )}
      </div>
      <SelectSizeSheet open={sizesDrawer} setOpen={setSizesDrawer} />
    </Fragment>
  );
};
