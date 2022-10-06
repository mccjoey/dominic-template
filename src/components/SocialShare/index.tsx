import styles from "./styles.module.scss";
import { Drawer } from "@mui/material";

import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  PinterestIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";
import { GrClose } from "react-icons/gr";
interface SocialShareProps {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const SocialShare: React.FC<SocialShareProps> = ({ open, setOpen }) => {
  const shareUrl = `https://veria.com.br/colecoes/feed`;
  const toggleSizesDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={toggleSizesDrawer(false)}
      className={styles.socialShareDrawer}
    >
      <section>
        <GrClose
          className={styles.closeSocialShare}
          onClick={() => setOpen(false)}
        />
        <h1>Compartilhar</h1>
        <div className={styles.socials}>
    
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon round={true} size={45} />
          </WhatsappShareButton>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon round={true} size={45} />
          </FacebookShareButton>
          <EmailShareButton url={shareUrl}>
            <EmailIcon round={true} size={45} />
          </EmailShareButton>
          <PinterestShareButton url={shareUrl} media={"oi"}>
            <PinterestIcon round={true} size={45} />
          </PinterestShareButton>
          <TelegramShareButton url={shareUrl}>
            <TelegramIcon round={true} size={45} />
          </TelegramShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon round={true} size={45} />
          </TwitterShareButton>
        </div>
      </section>
    </Drawer>
  );
};
