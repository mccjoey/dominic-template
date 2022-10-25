import styles from "./styles.module.scss";
import { productImages } from "../../../../mock/product";
import Image from "next/image";
import { RelProducts } from "../../../../components/RelProducts";
import { BsArrowLeftRight, BsTags, BsTruck } from "react-icons/bs";
import { Accordion } from "../../../../components/ProductComponents/Accordion";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useShowFooter from "../../../../hooks/useShowFooter";

export const ProductDesktop = () => {
  const isScrollingUp = useShowFooter();
  const [sizesDrawer, setSizesDrawer] = useState<boolean>(false);
  const [firstDown, setFirstDown] = useState<boolean>(false);
  const [isProductFavorite, setIsProductFavorite] = useState<boolean>(false);

  const { ref: header, inView: inViewHeader } = useInView({
    threshold: 0.1,
  });

  const { ref: buyButton, inView: inViewBuyButton } = useInView({
    threshold: 0.1,
  });

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

  useEffect(() => {
    const headerElement = document.getElementById("headerDesk");
    header(headerElement);

    setTimeout(() => {
      if (document) {
        const element = document.getElementById("whatsPopover");
        if (element) {
          element!.style!.display = "none";
        }
        return;
      }
    }, 5000);
  }, [header]);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        {!inViewBuyButton && (
          <div
            className={`${styles.productSticky}         
          ${isScrollingUp && styles.stickyDown2}
          ${!isScrollingUp && styles.stickyUp}    
          `}
          >
            <div className={styles.stickInfo}>
              <figure>
                <Image
                  src={productImages[0].src}
                  priority
                  width={45}
                  height={45}
                  alt="Produto"
                />
              </figure>
              <p>Calça Moletinho Preto</p>
              <p>
                <span>R$500,00</span>
                RS450,00
              </p>
              <p data-selectedColor="preto">
               
                <small className={styles.active}>
                  <Image
                    src="/images/product_color1.webp"
                    priority
                    width={20}
                    height={20}
                    alt="Produto"
                  />
                </small>
              </p>
            </div>
            <div className={styles.stickyButtons}>
              <button>Selecionar tamanho</button>
            </div>
          </div>
        )}

        <section className={styles.product}>
          <figure>
            {productImages?.map((image) => (
              <Image
                key={image.id}
                src={image.src}
                priority
                width={1800}
                height={2700}
                alt="Produto"
              />
            ))}
          </figure>
          <aside>
            <div className={styles.asideContent}>
              <div className={styles.productInfo}>
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
                <p className={styles.productName}>
                  Calça Moletinho Preto <span> -10%</span>
                </p>
                <p>
                  <small>R$500,00</small> RS450,00
                  <span>| ou 3x de R$ 166,00</span>
                </p>
              </div>
              <div className={styles.productDecription}>
                <p>
                  Blazer linho com modelagem alongada, detalhe botões frontais,
                  fechamento frontal por botão e bolsos frontais. Possui
                  ombreiras fixas e forro. <br />
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
              <section className={styles.bottomActions} ref={buyButton}>
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
              <div className={styles.productAccordion}>
                <Accordion title="Tabela de Medidas / Roupa">
                  <section className={styles.accordionContent}>
                    <p>
                      Nossos termos da Política de Devolução estão de acordo com
                      o código do consumidor para assegurar tanto o cliente
                      quanto a empresa Veria.
                    </p>
                    <p>
                      Não aceite um pedido com embalagem violada, na constatação
                      de avarias, embalagem violada, itens faltantes, produto em
                      desacordo com o pedido entre em contato conosco
                      imediatamente que resolveremos seu problema.
                    </p>
                  </section>
                </Accordion>
                <Accordion title="Composição">
                  <section className={styles.accordionContent}>
                    <p>100% Poliéster / Forro: 100% Poliéster</p>
                  </section>
                </Accordion>
                <Accordion title="Modelo">
                  <section className={styles.accordionContent}>
                    <p>Modelo: Usa P / Altura: 1,65</p>
                  </section>
                </Accordion>
                <Accordion title="SKU">
                  <section className={styles.accordionContent}>
                    <p>14374</p>
                  </section>
                </Accordion>
                <Accordion title="Política de troca">
                  <section className={styles.accordionContent}>
                    <p>
                      Nossos termos da Política de Devolução estão de acordo com
                      o código do consumidor para assegurar tanto o cliente
                      quanto a empresa Veria.
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
                      <td>
                        Flash Courier Express - entrega em até 3 dias úteis
                      </td>
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
            </div>
          </aside>
        </section>
        <div className={styles.productRel}>
          <RelProducts />
        </div>
      </div>
    </main>
  );
};
