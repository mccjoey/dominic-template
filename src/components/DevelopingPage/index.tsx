import type { NextPage } from "next";
import styles from "./styles.module.scss";

const DevelopingPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content} style={{backgroundImage : 'url(/images/placeholder_background.jpeg)'}}>
        <h1> {`{  Em desenvolvimento...  }`} </h1>
      </div>
    </main>
  );
};

export default DevelopingPage;
