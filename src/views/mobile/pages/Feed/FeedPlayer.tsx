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
import Image from "next/future/image";
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
          onReady={() => setIsReady(true)}
          loop
          fallback={
            <div className={styles.loading}>
              <p>Carregando</p>
            </div>
          }
        />
        {!isReady && <div className={styles.loading}>Ta carregando</div>}

        <aside>
          {muted ? (
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
      <ProductsModal open={isModalOpen} setOpen={setIsModalOpen} />
      <SocialShare open={sharePage} setOpen={setSharePage} />
    </>
  );
};
