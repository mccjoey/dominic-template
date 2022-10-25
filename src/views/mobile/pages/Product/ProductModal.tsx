import styles from "./styles.module.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useCallback, useEffect } from "react";
import Image from "next/image";
import { GrClose } from "react-icons/gr";

interface ProductModalProps {
  isOpen: boolean;
  setIsOpen: (state?: boolean | any) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
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
      className={styles.productModal}
      open={isOpen}
      onClose={toggleDrawer}
      direction="top"
      duration={0}
    >
      <section>
        <GrClose onClick={toggleDrawer} />
        <Image
          src="/images/product_modal.webp"
          priority
          width={902}
          height={1104}
          alt="banner"
        />
        <div className={styles.content}>
          <h1>Bem-Vinda</h1>
          <h2>Participe da nossa lista e ganhe</h2>
          <p>15% OFF</p>
          <h2>na sua primeira compra em nosso site.</h2>

          <div className={styles.emailInput}>
            <input type="email" placeholder="Digite seu email..." />
            <button>Cadastre-se</button>
          </div>

          <small>
            *Cupom não válido para outras promoções, descontos e seção OFF
          </small>
        </div>
      </section>
    </Drawer>
  );
};
