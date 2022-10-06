import styles from "./styles.module.scss";
import { useCallback, useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Header } from "../../../../components/Header";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { FooterMobile } from "../../components/Footer";
import useEmblaCarousel from "embla-carousel-react";
import { FeedPlayer } from "./FeedPlayer";

export const FeedMobile = () => {
  const { back } = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);

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

  const [viewportRef, embla] = useEmblaCarousel({ axis: "y", loop: true });

  embla?.on("select", () => {
    setCurrentSlide(embla.selectedScrollSnap());
  });

  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    onSelect();
  }, [embla, onSelect]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    window.scrollTo(0,0);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <main className={styles.feedMobile}>
      <div className={styles.content}>
        <Header>
          <BsChevronLeft onClick={() => back()} />
          <Image
            width={32}
            height={32}
            src="/icons/cart_white.svg"
            priority
            alt="Carrinho"
          />
        </Header>
        <section className={styles.sliderWrapper}>
          <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
              <div className="embla__container">
                {videoLinks.map((video, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="embla__slide__inner">
                      <FeedPlayer
                        index={index}
                        current={currentSlide}
                        video={video}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <FooterMobile />
      </div>
    </main>
  );
};
