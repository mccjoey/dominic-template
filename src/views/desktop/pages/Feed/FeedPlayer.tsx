"use-client";
import styles from "./styles.module.scss";
import { useCallback, useState } from "react";
import {
  BsPause,
  BsPlay,
  BsShare,
  BsVolumeMute,
  BsVolumeUp,
} from "react-icons/bs";
import Image from "next/image";
import { ProductsModal } from "./ProductsModal";
import { SocialShare } from "../../../../components/SocialShare";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface FeedPlayerProps {
  index: number;
  current: number;
  video: {
    id: string;
    link: string;
    title: string;
  };
  sharePage: boolean;
  setSharePage: (state: boolean) => void;
}

export const FeedPlayer: React.FC<FeedPlayerProps> = ({
  video,
  index,
  current,
  sharePage,
  setSharePage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(true);
  const [muted, setMuted] = useState<boolean>(false);

  const handleToggleMute = useCallback(() => {
    setMuted((current) => !current);
  }, []);

  const handleTogglePause = useCallback(() => {
    setPlaying((current) => !current);
  }, []);

  const setReady = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <section className={styles.playerWrapper}>
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
          <h1>{video?.title}</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </footer>
        {playing ? (
          <BsPause onClick={handleTogglePause} />
        ) : (
          <BsPlay className={styles.active} onClick={handleTogglePause} />
        )}
      </section>
      <ProductsModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        innerWidth={innerWidth}
      />
      <SocialShare open={sharePage} setOpen={setSharePage} />
    </>
  );
};
