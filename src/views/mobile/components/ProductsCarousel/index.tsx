import styles from "./styles.module.scss";
import { SectionTitle } from "../SectionTitle";
import { ProductItem } from "./ProductItem";
import Slider from "react-slick";

export const ProductsCarousel = () => {
  const carouselSettings = {
    arrows: false,
    centerMode: false,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 2.5,
    speed: 500,
  };

  return (
    <section className={styles.productsCarousel}>
      <SectionTitle category="Category Focus" sectionTitle="Best seller" />
      <Slider className={styles.carousel} {...carouselSettings}>
        {Array.from({ length: 4 }).map((product, index) => (
          <ProductItem key={`HomeProduct-${index}`} />
        ))}
      </Slider>
    </section>
  );
};
