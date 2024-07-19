import { Page } from "@/components";
import { GetStartedButton } from "@/components/custom/buttons";
import { mainText } from "@/config/pages";

const index = () => {
  return (
    <Page
      page="MainFirstPage"
      className="pageGradient min-h-screen"
      secondClassName="flex-col justify-between flex pb-4 lg:pb-8 xl:pb-12 2xl:pb-16"
    >
      <div className="flex justify-between gap-5">
        <div className="flex max-w-[400px] flex-col xl:max-w-[500px] 2xl:max-w-[542px]">
          <h6 className="pageNavTitle navTitleSpacing">{mainText.nav}</h6>
          <h1 className="mainTitle titleDescSpacing">{mainText.title}</h1>
          <p className="pageDesc mb-7">{mainText.desc}</p>
          <GetStartedButton />
        </div>
        <div className="relative">
          <img
            src={mainText.img}
            alt="female-img-oval"
            className="relative z-10 rounded-full lg:size-[15rem] xl:size-[19rem] 2xl:size-[22.65rem]"
          />
          <img
            src={mainText.shape}
            alt="shape"
            className="absolute -bottom-0 right-0 size-[9rem] xl:-bottom-[2.41rem]"
          />
        </div>
      </div>

      <div className="flex-center flex-col gap-3">
        <p className="opacity-65 max-xl:text-sm ">{mainText.company.title}</p>
        <div className="flex w-full items-center justify-between">
          {mainText.company.companies.map((logo, i) => (
            <div className="flex-center gap-2" key={i}>
              <img src={logo.icon} alt="company-logo" className="size-5 lg:size-9 xl:size-11" />
              <p className="font-semibold max-sm:text-xs lg:text-sm xl:text-lg 2xl:text-xl">
                {logo.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default index;
// lg:mt-[4rem] xl:mt-[7rem] 2xl:mt-[9.44rem]
