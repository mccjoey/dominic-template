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
import { FooterMobile } from "../../components/Footer";
import { FeedPlayer } from "./FeedPlayer";
import useView from "../../../../hooks/useView";
import { useMediaQuery } from "@mui/material";
import { useMenuStore } from "../../../../store/stores";
import Link from "next/link";
import { Menu } from "../../components/Header/Menu";

export const FeedMobile = () => {
  const { back } = useRouter();  
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState<boolean>(false);
  const [sharePage, setSharePage] = useState(false);
  const { innerWidth = 0 } = useView();
  const { toggleCart } = useMenuStore();

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

  const [viewportRef, embla] = useEmblaCarousel({
    axis: "y",
    loop: true,
  });

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

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <>
      <main className={styles.feedMobile}>
        <div className={styles.content}>
          <Header>
            <BsChevronLeft onClick={() => back()} />
            <Image
              width={32}
              height={32}
              src="/icons/menu_white.svg"
              priority
              alt="Menu"
              onClick={() => setIsHeaderMenuOpen(true)}
            />
            <small>
              {currentSlide + 1} / {videoLinks.length}
            </small>
            <Link href="/">
              <Image
                width={32}
                height={32}
                src="/icons/home_white.svg"
                priority
                alt="Home"
              />
            </Link>

            <Image
              width={32}
              height={32}
              src="/icons/cart_white.svg"
              priority
              alt="Carrinho"
              onClick={toggleCart}
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
          <FooterMobile />
        </div>
      </main>
      <Menu
        isOpen={isHeaderMenuOpen}
        setIsOpen={setIsHeaderMenuOpen}
        setIsFaqOpen={() => false}
        setIsHeaderMenuOpen={() => false}
      />
    </>
  );
};
