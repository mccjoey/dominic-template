import styles from "./styles.module.scss";
import { SectionTitle } from "../SectionTitle";
import Slider from "react-slick";
import { LiveItem } from "./LiveItem";

export const LivesCarousel = () => {
  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,   
    slidesToScroll: 1
  };

  return (
    <section className={styles.livesCarousel}>
      <SectionTitle category="Category Focus" sectionTitle="Live agendado" />
      <Slider className={styles.carousel} {...carouselSettings}>
        {Array.from({ length: 5 }).map((live, index) => (
          <LiveItem key={`HomeLive-${index}`} />
        ))}
      </Slider>
    </section>
  );
};
