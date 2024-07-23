import { PageTitle } from "@/components/others";
import { GetStartedButton } from "@/components/custom/buttons";
import { cn } from "@/lib/utils";
import { mainText } from "@/config/pages";
import { Company } from "./components";
import { Page } from "@/layouts";

const config = mainText.main;
const index = () => {
  return (
    <Page
      page="MainFirstPage"
      className="pageGradient min-h-screen sm:max-lg:min-h-fit sm:max-lg:pb-10"
      secondClassName="md:justify-between max-md:gap-[4.5rem] pb-4 lg:pb-8 xl:pb-12 2xl:pb-16 max-h-[70rem]"
    >
      <div className="flex justify-between gap-5">
        <div className="flex flex-col gap-5 sm:max-w-[400px] lg:gap-7 xl:max-w-[500px] 2xl:max-w-[542px]">
          <PageTitle
            nav={config.nav}
            title={config.title}
            titleType="mainTitle"
            desc={config.desc}
          />
          <GetStartedButton />
        </div>

        <div className="absolute size-[15rem] max-md:-right-[1.19rem] max-md:bottom-[2.92rem] md:relative xl:size-[19rem] 2xl:size-[22.65rem]">
          <img
            src={config.img}
            alt="female-img-oval"
            className="relative z-10 w-full rounded-full max-md:hidden"
          />
          <config.shape
            className={cn(
              "absolute bottom-0 right-0 size-[14rem] max-md:opacity-5 md:size-[9rem] xl:-bottom-[2.41rem]",
            )}
          />
        </div>
      </div>

      <div className="flex-center gap-3 max-md:flex-col-reverse md:flex-col">
        <p className="opacity-65 max-xl:text-sm max-md:text-xs">
          {config.company.title}
        </p>
        <div className="grid w-full grid-cols-2 items-center justify-between max-md:gap-[1.25rem] md:flex">
          {config.company.companies.map((v, i) => (
            <Company key={i} {...v} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default index;
