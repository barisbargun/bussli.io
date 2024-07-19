import { pageLinks } from "@/config";
import { useWindowSize } from "@/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const ActiveBar = () => {
  const location = useLocation();
  const [left, setLeft] = useState("2rem");
  const [startup, setStartup] = useState<any>(false);
  const windowSize = useWindowSize();

  const url = useMemo(() => location?.pathname.replace("/", ""), [location]);

  useEffect(() => {
    if (startup === false) setStartup(url);
    else if (startup != url) setStartup(true);
    switch (url) {
      case pageLinks.pricing.url:
        return setLeft(windowSize >= 4 ? "11rem" : "10rem");
      case pageLinks.about.url:
        return setLeft(windowSize >= 4 ? "17.3rem" : "15.5rem");
      case pageLinks.terms.url:
        return setLeft(windowSize >= 4 ? "23.7rem" : "20.8rem");
      default:
        setLeft(windowSize >= 4 ? "2rem" : "2.4rem");
    }
  }, [location]);

  return (
    url && (
      <motion.div
        animate={{ left: left }}
        transition={{ duration: startup === true ? 0.3 : 0, ease: "easeInOut" }}
        className={cn(
          "absolute -bottom-1 left-0 h-0.5 w-12 rounded-lg bg-indigo-600 xl:w-20",
        )}
      ></motion.div>
    )
  );
};

export default ActiveBar;
