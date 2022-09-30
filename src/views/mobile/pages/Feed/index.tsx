import styles from "./styles.module.scss";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { BsPause, BsPlay } from "react-icons/bs";

export const FeedMobile = () => {
  const [playing, setPlaying] = useState<boolean>(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  /// Página com layout Dior com coleções

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   verticalSwiping: true,
  //   beforeChange: function(currentSlide, nextSlide) {
  //     console.log("before change", currentSlide, nextSlide);
  //   },
  //   afterChange: function(currentSlide) {
  //     console.log("after change", currentSlide);
  //   }
  // };

  /// header
  ///   Voltar, Carrinho

  // Lateral
  //  Mutar
  //  Compartilhar
  //  Video Produtos Modal

  // Título e Descrição do Video

  //Bottom Footer fixo

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <ReactPlayer
          className={styles.player}
          playing={playing}
          url="https://player.vimeo.com/video/755671597"
          controls={false}
          muted={false}
          width="100%"
          height="100%"
          loop
          config={{
            file: {
              attributes: { preload: "auto" },
              forceAudio: true,
            },
          }}
        />
        {playing ? (
          <BsPause onClick={() => setPlaying(false)} />
        ) : (
          <BsPlay className={styles.active} onClick={() => setPlaying(true)} />
        )}
      </div>
    </main>
  );
};
