import { useEffect, useState } from "react";

interface ViewSizeProps {
  innerWidth: number;
  innerHeight: number;
}

const useView = () => {
  const [viewSize, setViewSize] = useState<ViewSizeProps>();

  useEffect(() => {
    function getWindowSize() {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }

    function handleWindowResize() {
      setViewSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize, false);

    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, []);

  return { ...viewSize };
};

export default useView;
