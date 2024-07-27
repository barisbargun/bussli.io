import { useEffect, useState } from "react";

type WindowSize = 0 | 1 | 2 | 3 | 4 | 5;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>(0);
  useEffect(() => {
    const handleMediaQueryChange = () => {
      const width = window.innerWidth;
      if (width >= 1536) setWindowSize(5);
      else if (width >= 1280) setWindowSize(4);
      else if (width >= 1024) setWindowSize(3);
      else if (width >= 640) setWindowSize(2);
      else setWindowSize(1);
    };
    handleMediaQueryChange();
    window.addEventListener("resize", handleMediaQueryChange);

    return () => {
      window.removeEventListener("resize", handleMediaQueryChange);
    };
  }, []);
  return windowSize;
};
export default useWindowSize;
