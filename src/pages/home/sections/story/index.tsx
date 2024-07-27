import { PageTitle } from "@/components/others";
import { mainText } from "@/config/pages";
import { Feature } from "./components";
import { Page } from "@/layouts";

const config = mainText.story;
const index = () => {
  return (
    <Page page="Page">
      <div className="flex justify-between gap-[5rem] lg:gap-[12rem] xl:gap-[16rem]">
        <div className="relative max-lg:flex-[0_0_43%] lg:flex-[0_0_42%] xl:flex-[0_0_38%]">
          <PageTitle nav={config.nav} title={config.title} mobilePadding={false} />
          <img
            src={config.leftImg}
            alt="female-img"
            className="relative z-10 mt-[2rem] sm:mt-[4rem] w-full"
          />

          <config.shape
            fill="#047857"
            className="absolute size-[9rem] max-lg:hidden lg:-left-[1.5rem] -bottom-[2.5rem] xl:-left-[2.5rem]"
          />
        </div>

        <div className="relative max-lg:flex-auto">
          <img src={config.rightImg} alt="male-img" className="" />
          <p className="pageDesc absolute lg:-left-[7.1rem] max-sm:pt-12 sm:pt-7">{config.desc}</p>
        </div>
      </div>

      <div className="unrelatedContentSpacing flex max-sm:flex-col sm:justify-between gap-[4.1rem] px-10">
        {config.features.map((v) => (
          <Feature key={v.title} {...v} />
        ))}
      </div>
    </Page>
  );
};

export default index;
