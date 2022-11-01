import Image from "next/image";
import styles from "./styles.module.scss";
import Slider from "react-slick";

interface ProductItemProps {}

export const ProductItem: React.FC<ProductItemProps> = () => {
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.productItem}>
      <Slider className={styles.productSlider} {...sliderSettings}>
        {Array.from({ length: 4 }).map((product, index) => (
          <div className={styles.productImage} key={`ProductSlide${index}`}>
            <Image
              src="/images/placeholder_product.webp"
              loading="lazy"
              width={1800}
              height={2700}
              alt="Produto"
            />
          </div>
        ))}
      </Slider>
      <p className={styles.productName}>Blusa Poá Gola Torcida - Preto</p>
      <small className={styles.productPrice}>R$139,00</small>
      <small className={styles.productInterest}>3x de R$46,33</small>
    </div>
  );
};
