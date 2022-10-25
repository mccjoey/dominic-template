import styles from "./styles.module.scss";
import { ProductItem } from "./ProductItem";
import Slider from "react-slick";
import useView from "../../hooks/useView";

export const RelProducts = () => {
  const { innerWidth = 0 } = useView();

  const carouselSettings = {
    arrows: false,
    centerMode: false,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: innerWidth <= 780 ?  1.2 : 5,
    speed: 500,
  };

  return (
    <section className={styles.relProducts}>
     <h1>Veja mais</h1>
      <Slider className={styles.carousel} {...carouselSettings}>
        {Array.from({ length: 10 }).map((product, index) => (
          <ProductItem key={`HomeProduct-${index}`} />
        ))}
      </Slider>
    </section>
  );
};
