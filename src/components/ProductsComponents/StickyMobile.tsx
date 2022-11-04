import useShowFooter from "../../hooks/useShowFooter";
import styles from "./styles.module.scss";

export const StickyMobile = () => {
  const isScrollingUp = useShowFooter();
  return (
    <section
      className={`${styles.stickyMobile} ${
        styles[isScrollingUp ? "stickyDown" : "stickyUp"]
      }`}
    >
      <ul>
        <li className={styles.active}>Novidades</li>
        <li>Vestidos</li>
        <li>Blazers</li>
        <li>Saias</li>
        <li>Coleção Verão</li>
      </ul>
    </section>
  );
};
