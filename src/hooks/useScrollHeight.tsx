import { useCallback, useEffect, useState } from "react";

const useScrollHeight = (height: number = 300) => {
  const [show, setShow] = useState(false);

  const getViewPosition = useCallback(() => {
    if (window.scrollY >= height) {
      setShow(true);
    } else {
      setShow(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", getViewPosition, false);

    return () => {
      window.removeEventListener("scroll", getViewPosition, false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return show;
};

export default useScrollHeight;
