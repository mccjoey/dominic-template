import styles from "./styles.module.scss";
import DevelopingPage from "../../../../components/DevelopingPage";
import ReactPlayer from "react-player";
import { useEffect } from "react";

export const FeedMobile = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
       
        <ReactPlayer
          className={styles.player}
          url="https://player.vimeo.com/video/755671237?h=60d40c4444&title=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&background=1"
          controls={false}
          config={{}}
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
