import styles from "./styles.module.scss";
import { ProductItem } from "./ProductItem";
import Slider from "react-slick";
import { SectionTitle } from "../SectionTitle";
import useView from "../../hooks/useView";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const ProductsCarousel = () => {
  const { innerWidth = 0 } = useView();

  const carouselSettings = {
    arrows: innerWidth <= 780 ? false : true,
    centerMode: false,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: innerWidth <= 780 ? 1.2 : 5,
    speed: 500,
    prevArrow: <BsChevronLeft />,
    nextArrow: <BsChevronRight />,
  };

  return (
    <section className={styles.productsCarousel}>
      <SectionTitle category="Category Focus" sectionTitle="Best seller" />
      <Slider className={styles.carousel} {...carouselSettings}>
        {Array.from({ length: 8 }).map((product, index) => (
          <ProductItem key={`HomeProduct-${index}`} />
        ))}
      </Slider>
    </section>
  );
};
