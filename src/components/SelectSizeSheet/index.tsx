import styles from "./styles.module.scss";
import { Drawer } from "@mui/material";

interface SelectSizesDrawerProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const SelectSizeSheet: React.FC<SelectSizesDrawerProps> = ({
  open,
  setOpen,
}) => {
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

      setOpen(open);
    };
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={toggleSizesDrawer(false)}
      className={styles.selectSizesDrawer}
    >
      <section>
        <h1>Selecione seu tamanho</h1>
        <ul>
          <li>
            PP <small className={styles.warn}>Últimas peças</small>
          </li>
          <li>P</li>
          <li>M</li>
          <li>
            G<small className={styles.noItems}>Esgotado. Avise-me!</small>
          </li>
          <li>
            GG
            <small className={styles.estimated}>
              Tempo estimado de estrega: 8 dias úteis
            </small>
          </li>
        </ul>
        <div className={styles.sizesDrawerbottom}>
          <button>Encontre seu tamanho</button>
          <button>Guia de Tamanhos</button>
        </div>
      </section>
    </Drawer>
  );
};
