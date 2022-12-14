import styles from "./styles.module.scss";
import { useCallback, useEffect, useState } from "react";
import {
  BsPause,
  BsPlay,
  BsShare,
  BsVolumeMute,
  BsVolumeUp,
} from "react-icons/bs";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ProductsModal } from "./ProductsModal";
import { SocialShare } from "../../../../components/SocialShare";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
interface FeedPlayerProps {
  index?: number;
  current?: number;
  video: {
    id: string;
    link: string;
    title: string;
  };
  sharePage: boolean;
  setSharePage: (state: boolean) => void;
  innerWidth: number
}

export const FeedPlayer: React.FC<FeedPlayerProps> = ({
  video,
  index,
  current,
  sharePage,
  setSharePage,
  innerWidth
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(true);
  const [muted, setMuted] = useState<boolean>(false);

  const handleToggleMute = useCallback(() => {
    setMuted((current) => !current);
  }, []);

  const setReady = useCallback(() => {
    setIsReady(true)
  }, [])

  return (
    <>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.player}
          playing={index == current && isReady && playing}
          url={video.link}
          volume={1}
          controls={false}
          muted={muted}
          width="100%"
          height="100%"
          onReady={setReady}
          loop
        />
        {!isReady && (
          <div className={styles.loading}>
            <div className={`${styles.loader} ${styles["loader-2"]}`}></div>
          </div>
        )}

        <aside>
          {!muted ? (
            <BsVolumeUp className={styles.active} onClick={handleToggleMute} />
          ) : (
            <BsVolumeMute onClick={handleToggleMute} />
          )}

          <BsShare onClick={() => setSharePage(true)} />

          <Image
            key={`Product-${index}`}
            src="/images/placeholder_product.webp"
            priority
            width={20}
            height={20}
            alt="Produto"
            onClick={() => setIsModalOpen(true)}
          />
        </aside>
        <footer>
          <h1>{video.title}</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </footer>
        {playing ? (
          <BsPause onClick={() => setPlaying(false)} />
        ) : (
          <BsPlay className={styles.active} onClick={() => setPlaying(true)} />
        )}
      </div>
      <ProductsModal open={isModalOpen} setOpen={setIsModalOpen} innerWidth={innerWidth} />
      <SocialShare open={sharePage} setOpen={setSharePage} />
    </>
  );
};
