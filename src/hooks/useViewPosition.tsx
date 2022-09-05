import { useCallback, useEffect, useState } from "react";

const useViewPosition = () => {
  const [viewPosition, setViewPosition] = useState<string>("show");

  const getViewPosition = useCallback(() => {
    if (window.scrollY >= 450) {
      setViewPosition("disable");
    } else {
      setViewPosition("show");
    }
  }, [viewPosition]);

  useEffect(() => {
    window.addEventListener("scroll", getViewPosition, false);
    return () => window.removeEventListener("scroll", getViewPosition, false);
  }, []);

  return viewPosition;
};

export default useViewPosition;
