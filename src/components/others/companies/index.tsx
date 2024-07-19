import { companyText } from "@/config/pages/components";
import { Company } from "./components";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@/hooks";
import { animate, motion, Variants } from "framer-motion";
import effects from "@/lib/motions";



const staggerVariants: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: i * 0.5,
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};

const config = companyText;
const index = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const windowSize = useWindowSize();

  return (
    <div
      {...props}
      className={cn(
        "flex-center gap-3 max-lg:flex-col-reverse max-lg:gap-5 lg:flex-col",
        className,
      )}
    >
      <motion.p custom={2} variants={effects.fadeIn({})} className="text-xs opacity-65">{config.title}</motion.p>
      <div className="flex w-full justify-between gap-y-10 max-lg:flex-wrap sm:gap-x-1 lg:gap-0">
        {config.companies.slice(0, windowSize >= 3 ? 4 : 8).map((v, i) => (
          <motion.div key={i} custom={i} variants={effects.fadeIn({direction:"left", duration:0.50, directionAmount:100, delay:0.4})}>
            <Company {...v} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default index;
