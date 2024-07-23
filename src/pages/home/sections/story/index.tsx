import { PageTitle } from "@/components/others";
import { mainText } from "@/config/pages";
import { Feature } from "./components";
import { Page } from "@/layouts";

const config = mainText.story;
const index = () => {
  return (
    <Page page="Page">
      <div className="flex justify-between gap-[16rem]">
        <div className="relative basis-1/2">
          <PageTitle nav={config.nav} title={config.title} />
          <img
            src={config.leftImg}
            alt="female-img"
            className="relative z-10 mt-[2.7rem] w-full"
          />

          <config.shape
            fill="#047857"
            className="absolute -bottom-[2.3rem] -left-[2.5rem]"
          />
        </div>

        <div className="relative basis-1/2">
          <img src={config.rightImg} alt="male-img" className="" />
          <p className="pageDesc absolute -left-[7.1rem] pt-7">{config.desc}</p>
        </div>
      </div>

      <div className="unrelatedContentSpacing flex justify-between gap-[4.1rem] px-10">
        {config.features.map((v) => (
          <Feature key={v.title} {...v} />
        ))}
      </div>
    </Page>
  );
};

export default index;
