import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FeedPlayer } from "./FeedPlayer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Header } from "../../../../components/Header";
import Image from "next/image";
import { useMenuStore } from "../../../../store/stores";

export const FeedDesktop = () => {
  const { back } = useRouter();
  const [sharePage, setSharePage] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { toggleCart } = useMenuStore();

  const videoLinks = [
    {
      id: "755671237",
      title: "Título 1",
      link: "https://vimeo.com/755671237",
    },
    {
      id: "755671597",
      title: "Título 2",
      link: "https://vimeo.com/755671597",
    },
  ];

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <main className={styles.feedDesktop}>
      <div className={styles.content}>
        <Header>
          <BsChevronLeft onClick={() => back()} />
          <small>
            {currentIndex + 1} / {videoLinks.length}
          </small>
          <Image
            width={32}
            height={32}
            src="/icons/cart_white.svg"
            priority
            alt="Carrinho"
            onClick={toggleCart}
          />
        </Header>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.swipperSlider}
          onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
        >
          {videoLinks?.map((video, index) => (
            <SwiperSlide key={video.id}>
              <FeedPlayer
                index={index}
                video={video}
                sharePage={sharePage}
                current={currentIndex}
                setSharePage={setSharePage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};
