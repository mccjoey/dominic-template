import type { NextPage } from "next";
import useView from "../../../hooks/useView";
import FeedDesktop from "../../../views/desktop/pages/Feed";
import { FeedMobile } from "../../../views/mobile/pages/Feed";

const Feed: NextPage = () => {
  const { innerWidth = 0 } = useView();

  if (innerWidth <= 780) {
    return <FeedMobile />;
  }

  return <FeedDesktop />;
};

export default Feed;
