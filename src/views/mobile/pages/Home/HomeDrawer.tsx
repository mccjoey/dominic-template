import styles from "./styles.module.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/future/image";

interface HomeDrawerProps {
  isOpen: boolean;
  setIsOpen: (state?: boolean | any) => void;
}

export const HomeDrawer: React.FC<HomeDrawerProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, newIndex: number) => setCurrentIndex(newIndex),
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prevState: boolean) => !prevState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Drawer
      className={styles.homeDrawer}
      open={isOpen}
      onClose={toggleDrawer}
      direction="bottom"
    >
      <section>
        <div className={styles.slider}>
          <Slider {...sliderSettings}>
            {Array.from({ length: 5 }).map((product, index) => (
              <div className={styles.bannerImage} key={`BannerSlide${index}`}>
                <Image
                  src={`/images/home_${index + 1}.jpeg`}
                  priority
                  width={1800}
                  height={2700}
                  alt="Produto"
                />
              </div>
            ))}
          </Slider>
          <small>{currentIndex + 1}/5</small>
        </div>
        <div className={styles.bottom}>
          <button onClick={toggleDrawer}>Não exibir mais hoje</button>
          <button onClick={toggleDrawer}>Fechar</button>
        </div>
      </section>
    </Drawer>
  );
};
