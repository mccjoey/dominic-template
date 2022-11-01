import styles from "./styles.module.scss";

type SectionTitleProps = {
  category?: string;
  sectionTitle?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
  category = "Category Name",
  sectionTitle = "Section Title",
}) => {
  return (
    <div className={styles.sectionTitle}>
      <p>{category}</p>
      <h1>{sectionTitle}</h1>
    </div>
  );
};
