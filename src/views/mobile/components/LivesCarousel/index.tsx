import styles from "./styles.module.scss";
import { SectionTitle } from "../SectionTitle";
import Slider from "react-slick";
import { LiveItem } from "./LiveItem";

export const LivesCarousel = () => {
  const carouselSettings = {
    arrows: false,
    centerMode: false,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 2.5,
    speed: 500
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
