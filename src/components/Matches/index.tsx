import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Matches = () => {
  return (
    <section className={styles.matches}>
      <div className={styles.content}>
        <h1>Matches</h1>
        <div className={styles.matchesList}>
          <figure>
            <Image
              src="https://au.lattelierstore.com/wp-content/uploads/2021/09/pc-GentleDays.jpg"
              priority
              width={800}
              height={1800}
              alt="photo"
            />
            <div>
              <p>Gentle Days</p>
              <Link href="/produtos">View all</Link>
            </div>
          </figure>

          <figure>
            <Image
              src="https://au.lattelierstore.com/wp-content/uploads/2021/09/pc-CityForest.jpg"
              priority
              width={800}
              height={1800}
              alt="photo"
            />
             <div>
              <p>City Forest</p>
              <Link href="/produtos">View all</Link>
            </div>
          </figure>

          <figure>
            <Image
              src="https://au.lattelierstore.com/wp-content/uploads/2021/09/pc-SpringPicnic.jpg"
              priority
              width={800}
              height={1800}
              alt="photo"
            />
             <div>
              <p>Spring Picnic</p>
              <Link href="/produtos">View all</Link>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
