import { Companies, PageTitle } from "@/components/others";
import { GetStartedButton } from "@/components/custom/buttons";
import { cn } from "@/lib/utils";
import { mainText } from "@/config/pages";
import { Page } from "@/layouts";
import { motion } from "framer-motion";
import motions from "@/lib/motions";

const config = mainText.main;
const index = () => {
  return (
    <Page
      page="MainFirstPage"
      className="pageGradient h-screen max-h-[1200px] sm:max-lg:h-fit sm:max-lg:pb-10"
      secondClassName="lg:justify-between max-lg:gap-[4.5rem] pb-4 lg:pb-10 2xl:pb-16 max-h-[70rem]"
    >
      <div className="flex justify-between gap-5">
        <motion.div variants={motions.fadeIn({direction:"left"})} className="flex max-w-[33.8rem] flex-col gap-5 lg:gap-7">
          <PageTitle
            nav={config.nav}
            title={config.title}
            titleType="mainTitle"
            desc={config.desc}
            className="max-lg:px-0 text-left"
            useMotion={false}
          />
          <GetStartedButton />
        </motion.div>

        <motion.div  variants={motions.fadeIn({direction:"right"})} className="absolute size-[20rem] max-md:-right-[1.19rem] max-md:bottom-[2.92rem] lg:relative xl:size-[22.65rem]">
          <img loading="lazy"
            src={config.img}
            alt="female-img-oval"
            className="relative z-10 w-full rounded-full max-md:hidden"
          />
          <config.shape
            className={cn(
              "absolute bottom-0 right-0 size-[20rem] max-md:opacity-5 lg:-bottom-[1rem] lg:size-[10rem] 2xl:-bottom-[2rem] 2xl:size-[12rem]",
            )}
          />
        </motion.div>
      </div>

      <Companies />
    </Page>
  );
};

export default index;
