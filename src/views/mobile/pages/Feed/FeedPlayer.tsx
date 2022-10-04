import styles from "./styles.module.scss";
import { useCallback, useEffect, useState } from "react";
import {
  BsPause,
  BsPlay,
  BsShare,
  BsVolumeMute,
  BsVolumeUp,
} from "react-icons/bs";
import ReactPlayer from "react-player";
import Image from "next/future/image";
import { ProductsModal } from "./ProductsModal";

interface FeedPlayerProps {
  index?: number;
  current?: number;
  video: {
    id: string;
    link: string;
  };
}

export const FeedPlayer: React.FC<FeedPlayerProps> = ({
  video,
  index,
  current,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playing, setPlaying] = useState<boolean>(true);
  const [muted, setMuted] = useState(true);
  const [hasWindow, setHasWindow] = useState(false);

  const handleToggleMute = useCallback(() => {
    setMuted((current) => !current);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  // Lateral
  //  Mutar
  //  Compartilhar
  //  Video Produtos Modal

  // Título e Descrição do Video

  return (
    <>
      <div className={styles.playerWrapper}>
        {hasWindow && (
          <ReactPlayer
            className={styles.player}
            playing={index == current && playing}
            url={video.link}
            loop
            controls={false}
            muted={muted}
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: { preload: "auto" },
                forceAudio: true,
              },
            }}
          />
        )}

        {playing ? (
          <BsPause onClick={() => setPlaying(false)} />
        ) : (
          <BsPlay className={styles.active} onClick={() => setPlaying(true)} />
        )}
      </div>
      <aside className={styles.aside}>
        {muted ? (
          <BsVolumeMute onClick={handleToggleMute} />
        ) : (
          <BsVolumeUp className={styles.active} onClick={handleToggleMute} />
        )}

        <BsShare />

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
      <footer className={styles.footer}>
        <h1>Título do vídeo</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </footer>
      <ProductsModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
};
