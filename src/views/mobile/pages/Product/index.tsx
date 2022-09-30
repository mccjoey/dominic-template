import { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/future/image";
import { Drawer } from "@mui/material";
import useScrollHeight from "../../../../hooks/useScrollHeight";
import { RelProducts } from "../../components/RelProducts";
import { BsChevronLeft } from "react-icons/bs";
import useHeaderState from "../../../../hooks/useHeaderState";
import useShowFooter from "../../../../hooks/useShowFooter";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRouter } from "next/router";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

export const ProductMobile = () => {
  const [gridView, setGridView] = useState(2);
  const [height, setHeight] = useState(0);
  const [sizesDrawer, setSizesDrawer] = useState<boolean>(false);
  const [isProductFavorite, setIsProductFavorite] = useState<boolean>(false);
  const scrollHeight = useScrollHeight(400);
  const headerState = useHeaderState();
  const showFooter = useShowFooter();
  const route = useRouter();

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
          paddingTop: `calc(80vh)`,
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
              <small>Home - Roupas - Calças</small>
              <p>Calça Moletinho Preto</p>
              <p>
                RS498,00 <span>| ou 3x de R$ 166,00</span>
              </p>
            </div>
            <div className={styles.productDecription}>
              <p>
                PRETO: Atemporal e elegante, é a cor ideal para compor produções
                com peças estampadas ou looks monocromáticos.
                <br />
                Calça com cós de elástico e amarração de rolotê da própria malha
                e com gancho levemente deslocado. O modelo traz conforto e é
                ideal para compor um conjunto com a Blusa Prega Moletinho da
                mesma cor, criando uma produção monocromática casual e elegante.
                Modelo veste tamanho PP. Altura modelo: 1,74m
              </p>
            </div>
            <Image
              className={styles.imageInfo}
              src="/images/product-info.jpeg"
              priority
              width={350}
              height={68}
              alt="Produto"
            />
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
              <p>
                Política de troca <span>+</span>
              </p>
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
                  <tr>
                    <td>R$&nbsp;34,33</td>
                    <td>Sedex - entrega em até 2 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;30,20</td>
                    <td>Pac Village - entrega em até 9 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;30,20</td>
                    <td>Pac RDBarra - entrega em até 9 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;30,20</td>
                    <td>Pac Garcia - entrega em até 9 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;30,20</td>
                    <td>Pac Forum - entrega em até 9 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;30,20</td>
                    <td>Pac Gávea - entrega em até 9 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;30,20</td>
                    <td>Pac Niterói - entrega em até 9 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;30,20</td>
                    <td>Pac F Mall - entrega em até 9 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;30,20</td>
                    <td>Pac ShLeblon - entrega em até 10 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;31,40</td>
                    <td>Pac Bh - entrega em até 6 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;31,40</td>
                    <td>Pac Curitiba - entrega em até 7 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;35,95</td>
                    <td>Pac Salvador - entrega em até 8 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;41,99</td>
                    <td>Sedex Village - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;41,99</td>
                    <td>Sedex ShLeblon - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;41,99</td>
                    <td>Sedex RDBarra - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;41,99</td>
                    <td>Sedex Garcia - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;41,99</td>
                    <td>Sedex Forum - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;41,99</td>
                    <td>Sedex Gávea - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;41,99</td>
                    <td>Sedex Niterói - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;41,99</td>
                    <td>Sedex F Mall - entrega em até 3 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;43,78</td>
                    <td>Sedex Bh - entrega em até 2 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;43,78</td>
                    <td>Sedex Curitiba - entrega em até 2 dias úteis</td>
                  </tr>
                  <tr>
                    <td>R$&nbsp;75,09</td>
                    <td>Sedex Salvador - entrega em até 3 dias úteis</td>
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
                    <div className={styles.whatsPopover}>Compre pelo WhatsApp!</div>
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
      <Drawer
        anchor="bottom"
        open={sizesDrawer}
        onClose={toggleSizesDrawer(false)}
        className={styles.sizesDrawer}
      >
        <section>
          <h1>Selecione seu tamanho</h1>
          <ul>
            <li>
              PP <small className={styles.warn}>Last feel items</small>
            </li>
            <li>P</li>
            <li>M</li>
            <li>
              G
              <small className={styles.noItems}>Not available I want it!</small>
            </li>
            <li>
              GG
              <small className={styles.estimated}>
                Estimated shipment in 8 business days
              </small>
            </li>
          </ul>
          <div className={styles.sizesDrawerbottom}>
            <button>Encontre seu tamanho</button>
            <button>Guia de Tamanhos</button>
          </div>
        </section>
      </Drawer>
    </>
  );
};
