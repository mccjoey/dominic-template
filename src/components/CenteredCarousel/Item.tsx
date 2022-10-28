import { memo, useState } from "react";
import { BsPause, BsPlay } from "react-icons/bs";
import styles from "./styles.module.scss";

type VideoItemProps = {
  video: {
    id: string;
    src: string;
    title: string;
  };
  canPlay: boolean;
};

const Item: React.FC<VideoItemProps> = ({ video, canPlay }) => {
  const [playing, setPlaying] = useState<boolean>(false);

  console.log(canPlay);

  return (
    <div className={styles.item}>
      <div style={{ padding: "125% 0 0 0", position: "relative" }}>
        <iframe
          src={`${
            video.src
          }&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=${
            canPlay && playing
          }&loop=1&controls=1&background=1`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={video.title}
        />
        <div className={styles.playButton}>
          {playing ? (
            <BsPause onClick={() => setPlaying(false)} />
          ) : (
            <BsPlay
              className={styles.active}
              onClick={() => setPlaying(true)}
            />
          )}
        </div>
      </div>
      <p className={styles.name}>{video.title}</p>
    </div>
  );
};

export default memo(Item);
