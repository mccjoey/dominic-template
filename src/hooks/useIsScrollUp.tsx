import { useCallback, useState } from "react";

const useIsScrollUp = () => {
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const scrollControl = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsScrollingUp(false);
    } else {
      setIsScrollingUp(true);
    }

    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollControl);
  }

  return { isScrollingUp };
};

export default useIsScrollUp;
