import { useEffect } from "react";

type UseTimeoutProps = {
  setState: (state: boolean) => void;
};

export const useTimeout = ({ setState }: UseTimeoutProps) => {
  useEffect(() => {
    const usetimeouthook = setTimeout(() => {
      setState(true);
      return clearTimeout("usetimeouthook");
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
