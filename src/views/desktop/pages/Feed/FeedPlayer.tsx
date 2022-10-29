import styles from "./styles.module.scss";
import { useCallback, useState } from "react";
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
const Vimeo = dynamic(() => import("@u-wave/react-vimeo"), { ssr: false });

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
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);

  const handleToggleMute = useCallback(() => {
    setMuted((current) => !current);
  }, []);

  const handleTogglePause = useCallback(() => {
    setIsPaused((current) => !current);
  }, []);

  const onVideoReady = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <section className={styles.playerWrapper}>
        <Vimeo
          video={video.link}
          controls={false}
          autoplay={true}
          volume={1}
          muted={muted}
          paused={index === current && isReady && isPaused}
          background={false}
          onLoaded={onVideoReady}
          loop
        />
        {isReady && (
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
        {isPaused ? (
          <BsPlay className={styles.active} onClick={handleTogglePause} />
        ) : (
          <BsPause onClick={handleTogglePause} />
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
