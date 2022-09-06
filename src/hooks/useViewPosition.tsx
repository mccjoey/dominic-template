import { useCallback, useEffect, useState } from "react";

const useViewPosition = () => {
  const [viewPosition, setViewPosition] = useState<string>("show");
  const [scrollWay, setScrollWay] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const getViewPosition = useCallback(() => {
    if (window.scrollY >= 500) {
      setViewPosition("disable");
    } else if (scrollWay === "up") {
      setViewPosition("show");
    }

    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      setScrollWay("down");
    } else {
      setScrollWay("up");
    }
    setLastScrollTop(st <= 0 ? 0 : st);
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewPosition]);

  useEffect(() => {
    window.addEventListener("scroll", getViewPosition, false);
    
    return () => {
      window.removeEventListener("scroll", getViewPosition, false);
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return viewPosition;
};

export default useViewPosition;
