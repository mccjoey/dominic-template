import styles from "./styles.module.scss";
import { SectionTitle } from "../SectionTitle";
import Slider from "react-slick";
import { Item } from "./Item";

export const CenteredCarousel = () => {
  const carouselSettings = {
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <section className={styles.centeredCarousel}>
      <SectionTitle category="Category Focus" sectionTitle="Veria Tv" />
      <Slider className={styles.carousel} {...carouselSettings}>
        {Array.from({ length: 4 }).map((item, index) => (
          <Item key={`HomeProduct-${index}`} />
        ))}
      </Slider>
    </section>
  );
};
