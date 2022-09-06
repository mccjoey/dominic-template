import { useCallback, useEffect, useState } from "react";

const useViewPosition = () => {
  const [viewPosition, setViewPosition] = useState<string>("show");

  const getViewPosition = useCallback(() => {
    if (window.scrollY >= 450) {
      setViewPosition("disable");
    } else {
      setViewPosition("show");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewPosition]);

  useEffect(() => {
    window.addEventListener("scroll", getViewPosition, false);
    return () => window.removeEventListener("scroll", getViewPosition, false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return viewPosition;
};

export default useViewPosition;
