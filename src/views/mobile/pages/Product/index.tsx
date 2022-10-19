import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/future/image";
import useScrollHeight from "../../../../hooks/useScrollHeight";
import { RelProducts } from "../../components/RelProducts";
import {
  BsArrowLeftRight,
  BsChevronLeft,
  BsTags,
  BsTruck,
} from "react-icons/bs";
import useHeaderState from "../../../../hooks/useHeaderState";
import useShowFooter from "../../../../hooks/useShowFooter";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRouter } from "next/router";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { setTimeout } from "timers";
import { Accordion } from "./Accordion";
import { SelectSizeSheet } from "../../../../components/SelectSizeSheet";
import { ProductModal } from "./ProductModal";

export const ProductMobile = () => {
  const [gridView, setGridView] = useState(2);
  const [height, setHeight] = useState(0);
  const [sizesDrawer, setSizesDrawer] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isProductFavorite, setIsProductFavorite] = useState<boolean>(false);
  const scrollHeight = useScrollHeight(400);
  const headerState = useHeaderState();
  const showFooter = useShowFooter();
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);
  }, []);

  setTimeout(() => {
    if (document) {
      const element = document.getElementById("whatsPopover");
      if (element) {
        element!.style!.display = "none";
      }
      return;
    }
  }, 5000);

  const toggleSizesDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setSizesDrawer(open);
    };

  const measuredRef = useCallback((node: any) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <main
        className={styles.main}
        style={{
          paddingTop: `${height}px`,
        }}
      >
        <div className={styles.content}>
          <nav
            className={`${styles.productNav} ${
              styles[showFooter && headerState ? "sticky" : "transparent"]
            }`}
          >
            <div>
              <BsChevronLeft onClick={() => route.back()} />
              <Image
                width={32}
                height={32}
                src="/icons/cart.svg"
                priority
                alt="Carrinho"
              />
            </div>
          </nav>
          <div
            className={styles.imageSlider}
            ref={measuredRef}
            style={{ zIndex: scrollHeight ? "-1" : 0 }}
          >
            <Carousel
              className={styles.productImageSlider}
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              transitionTime={300}
              centerSlidePercentage={100}
              infiniteLoop
              swipeable
              centerMode
              showIndicators
            >
              {Array.from({ length: 4 }).map((product, index) => (
                <Image
                  key={`Product-${index}`}
                  src="/images/placeholder_product.webp"
                  priority
                  width={1800}
                  height={2700}
                  alt="Produto"
                />
              ))}
            </Carousel>
          </div>
          <div className={styles.productContent}>
            <div className={styles.productInfo}>
              {/* <small>Home - Roupas - Calças</small> */}
              <div className={styles.iosDivider}></div>
              <div className={styles.productColors}>
                <small className={styles.active}>
                  <Image
                    src="/images/product_color1.webp"
                    priority
                    width={20}
                    height={20}
                    alt="Produto"
                  />
                </small>
                <small>
                  <Image
                    src="/images/product_color2.webp"
                    priority
                    width={20}
                    height={20}
                    alt="Produto"
                  />
                </small>
                <small>
                  <Image
                    src="/images/product_color3.webp"
                    priority
                    width={20}
                    height={20}
                    alt="Produto"
                  />
                </small>
              </div>
              <p className={styles.productName}>Calça Moletinho Preto</p>
              <p>
                RS498,00 <span>| ou 3x de R$ 166,00</span>
              </p>
            </div>
            <div className={styles.productDecription}>
              <p>
                Blazer linho com modelagem alongada, detalhe botões frontais,
                fechamento frontal por botão e bolsos frontais. Possui ombreiras
                fixas e forro. <br />
                Possui um tecido de linho macio composto com elastano, que
                facilita o movimento. <br /> <br />
                Dica de lavagem: Lavagem à mão. Não alvejar. Não secar em
                tambor. Secagem em varal. Passar à ferro até 110°c, risco à
                vapor ou prensa
              </p>
            </div>
            <section className={styles.productExtraInfo}>
              <div>
                <BsTruck />
                <p>Frete grátis para compras acima de R$499</p>
              </div>
              <div>
                <BsTags />
                <p>7 dias corridos para devolução</p>
              </div>
              <div>
                <BsArrowLeftRight />
                <p>Proecesso de compra 100% segura</p>
              </div>
            </section>

            <div className={styles.productAccordion}>
              <p>
                Tabela de medidas / Roupa <span>+</span>
              </p>
              <p>
                Composição <span>100% Poliéster / Forro: 100% Poliéster</span>
              </p>
              <p>
                Modelo <span>Modelo: Usa P / Altura: 1,65</span>
              </p>
              <p>
                SKU <span>14374</span>
              </p>
              <Accordion title="Política de troca">
                <section className={styles.accordionContent}>
                  <p>
                    Nossos termos da Política de Devolução estão de acordo com o
                    código do consumidor para assegurar tanto o cliente quanto a
                    empresa Veria.
                  </p>
                  <p>
                    Não aceite um pedido com embalagem violada, na constatação
                    de avarias, embalagem violada, itens faltantes, produto em
                    desacordo com o pedido entre em contato conosco
                    imediatamente que resolveremos seu problema.
                  </p>
                </section>
              </Accordion>
            </div>
            <div className={styles.productShippingCalc}>
              <h1>Prazo de entrega</h1>
              <div>
                <input id="input" type="number" placeholder="CEP" />
                <button className="button">Calcular</button>
              </div>
              <a
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target="_blank"
                rel="noreferrer"
              >
                Não sei meu cep
              </a>
              <table>
                <thead>
                  <tr>
                    <td>Valor</td>
                    <td>Prazo</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>R$&nbsp;16,40</td>
                    <td>
                      Flash Courier Standard - entrega em até 6 dias úteis
                    </td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;18,30</td>
                    <td>Flash Courier Express - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;23,02</td>
                    <td>PAC - entrega em até 6 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;24,83</td>
                    <td>Transportadora - entrega em até 4 dias úteis</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section className={styles.bottomActions}>
              <div className={styles.bottomContent}>
                <div className={styles.actions}>
                  {isProductFavorite ? (
                    <AiTwotoneHeart
                      className={styles.active}
                      onClick={() => setIsProductFavorite(!isProductFavorite)}
                    />
                  ) : (
                    <AiOutlineHeart
                      onClick={() => setIsProductFavorite(!isProductFavorite)}
                    />
                  )}

                  <div className={styles.columnSeparator}>a</div>

                  <div className={styles.whatsIcon}>
                    <div id="whatsPopover" className={styles.whatsPopover}>
                      Compre pelo WhatsApp!
                    </div>
                    <IoLogoWhatsapp />
                  </div>
                </div>
                <button onClick={toggleSizesDrawer(true)}>
                  Selecionar tamanho
                </button>
              </div>
            </section>

            <div className={styles.productRel}>
              <RelProducts />
            </div>
          </div>
        </div>
      </main>
      <SelectSizeSheet open={sizesDrawer} setOpen={setSizesDrawer} />
      <ProductModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};
