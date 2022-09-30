import styles from "./styles.module.scss";
import { SectionTitle } from "../SectionTitle";
import { ProductItem } from "./ProductItem";
import Slider from "react-slick";

export const RelProducts = () => {
  const carouselSettings = {
    arrows: false,
    centerMode: false,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 1.2,
    speed: 500,
  };

  return (
    <section className={styles.relProducts}>
     <h1>Veja mais</h1>
      <Slider className={styles.carousel} {...carouselSettings}>
        {Array.from({ length: 4 }).map((product, index) => (
          <ProductItem key={`HomeProduct-${index}`} />
        ))}
      </Slider>
    </section>
  );
};
