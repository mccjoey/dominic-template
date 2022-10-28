import styles from "./styles.module.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronLeft,
} from "react-icons/bs";
import { Header } from "../../../../components/Header";
import { useRouter } from "next/router";
import { FeedPlayer } from "./FeedPlayer";
import useView from "../../../../hooks/useView";

export const FeedDesktop = () => {
  const { back } = useRouter();
  const [sharePage, setSharePage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { innerWidth = 0 } = useView();

  const videoLinks = [
    {
      id: "uadsfgdasihjdgfas",
      title: "Título 1",
      link: "https://vimeo.com/755671237",
    },
    {
      id: "654sadjfhgas",
      title: "Título 2",
      link: "https://vimeo.com/755671597",
    },
  ];

  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
    draggable: false,
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCurrentIndex(embla.selectedScrollSnap)
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <main className={styles.feedMobile}>
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
          />
        </Header>
        <section className={styles.sliderWrapper}>
          <BsChevronCompactLeft className={styles.arrow} onClick={scrollPrev} />
          <div className="embla2">
            <div className="embla__viewport2" ref={viewportRef}>
              <div className="embla__container2">
                {videoLinks?.map((video, index) => (
                  <div className="embla__slide2" key={`videoDesk${index}`}>
                    <div className="embla__slide__inner2">
                      <FeedPlayer
                        index={index}
                        current={currentIndex}
                        video={video}
                        sharePage={sharePage}
                        setSharePage={setSharePage}
                        innerWidth={innerWidth}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <BsChevronCompactRight
            className={styles.arrow}
            onClick={scrollNext}
          />
        </section>
      </div>
    </main>
  );
};
