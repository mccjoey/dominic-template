import styles from "./styles.module.scss";
import { Dialog } from "@mui/material";
import Slider from "react-slick";
import { ProductItem } from "./ProductItem";
import { IoMdClose } from "react-icons/io";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface ProductsModalProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  innerWidth: number;
}

export const ProductsModal: React.FC<ProductsModalProps> = ({
  open,
  setOpen,
  innerWidth,
}) => {
  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason === "backdropClick") {
      return;
    }

    setOpen(false);
  };

  const carouselSettings = {
    arrows: true,
    centerMode: false,
    infinite: false,
    slidesToShow: innerWidth >= 780 ? 4 : 1.3,
    speed: 500,
    prevArrow: <BsChevronCompactLeft />,
    nextArrow: <BsChevronCompactRight />,
  };

  return (
    <Dialog open={open} onClose={handleClose} className={styles.productsModal}>
      <section className={styles.productsCarousel}>
        <IoMdClose
          className={styles.closeModal}
          color={"#fff"}
          onClick={() => setOpen(false)}
        />
        <Slider className={styles.carousel} {...carouselSettings}>
          {Array.from({ length: 8 }).map((product, index) => (
            <ProductItem
              setOpen={setOpen}
              key={`HomeProduct-${index}`}
              innerWidth={innerWidth}
            />
          ))}
        </Slider>
      </section>
    </Dialog>
  );
};
