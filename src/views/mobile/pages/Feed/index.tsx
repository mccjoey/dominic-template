import styles from "./styles.module.scss";
import DevelopingPage from "../../../../components/DevelopingPage";
import ReactPlayer from "react-player";
import { useEffect } from "react";

export const FeedMobile = () => {
  useEffect(()=> {
    document.body.style.overflow = "hidden"
  },[])
  
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <ReactPlayer
          className={styles.player}
          url="https://youtube.com/shorts/CieepilD-bw?showinfo=0"
          controls={false}
          config={{
            youtube: {
              playerVars: { controls: 0 },
            },
          }}
          width="100%"
          height="100%"
          playing
          muted
          loop
        />
      </div>
    </main>
  );
};
