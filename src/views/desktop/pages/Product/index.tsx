import styles from "./styles.module.scss";
import { productImages } from "../../../../mock/product";
import Image from "next/future/image";

export const ProductDesktop = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
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
            <div className={styles.asideContent}>Conteúdo</div>
          </aside>
        </section>
      </div>
    </main>
  );
};
