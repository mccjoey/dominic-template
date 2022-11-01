import styles from "./styles.module.scss";
import Slider from "react-slick";
import Item from "./Item";
import { veriaTvVideos } from "../../mock/veriaTv";
import { useState } from "react";
import Arrow from "@elsdoerfer/react-arrow";
import { SectionTitle } from "../SectionTitle";
import useView from "../../hooks/useView";

export const CenteredCarousel = () => {
  const { innerWidth = 0 } = useView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselSettings = {
    arrows: false,
    centerMode: true,
    className: "center",
    infinite: true,
    centerPadding: innerWidth >= 780 ? "450px" : "50px",
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    afterChange: (index: number) => setCurrentIndex(index),
  };

  return (
    <section
      className={styles.centeredCarousel}
      style={{
        backgroundImage: `url(${veriaTvVideos[currentIndex].backgroundImage})`,
      }}
    >
      <SectionTitle category="Category Focus" sectionTitle="Veria Tv" />
      <Slider {...carouselSettings}>
        {veriaTvVideos?.map((video, index) => (
          <Item key={video.id} video={video} canPlay={currentIndex === index} />
        ))}
      </Slider>
      <small className={styles.currentIndex}>
        <Arrow
          angle={270}
          length={100}
          color="#fff"
          style={{
            width: "50px",
          }}
        />
        {` ${currentIndex + 1} / ${veriaTvVideos.length} `}
        <Arrow
          angle={90}
          length={100}
          color="#fff"
          style={{
            width: "50px",
          }}
        />
      </small>
    </section>
  );
};
