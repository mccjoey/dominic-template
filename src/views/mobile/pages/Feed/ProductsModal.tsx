import styles from "./styles.module.scss";
import { Dialog } from "@mui/material";
import Slider from "react-slick";
import { ProductItem } from "./ProductItem";
import { IoMdClose } from "react-icons/io";

interface ProductsModalProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const ProductsModal: React.FC<ProductsModalProps> = ({
  open,
  setOpen,
}) => {
  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason) {
      return;
    }
    setOpen(false);
  };

  const carouselSettings = {
    arrows: false,
    centerMode: false,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 1.3,
    speed: 500,
  };

  return (
    <Dialog open={open} onClose={handleClose} className={styles.productsModal}>
      <section className={styles.productsCarousel}>
        <IoMdClose
          className={styles.closeModal}
          color={"#fff"}
          onClick={handleClose}
        />
        <Slider className={styles.carousel} {...carouselSettings}>
          {Array.from({ length: 4 }).map((product, index) => (
            <ProductItem key={`HomeProduct-${index}`} />
          ))}
        </Slider>
      </section>
    </Dialog>
  );
};
