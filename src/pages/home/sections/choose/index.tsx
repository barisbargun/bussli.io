import { Cta, PageTitle } from "@/components/others";
import { mainText } from "@/config/pages";
import { Feature } from "./components";
import { Page } from "@/layouts";

const config = mainText.choose;
const index = () => {
  return (
    <Page
      className="pageGradient relative"
      secondClassName="items-center static"
    >
      <PageTitle
        nav={config.nav}
        title={config.title}
      />
      <div className="firstContentSpacing max-sm:px-8 grid max-w-[56rem] grid-cols-2 gap-24 lg:gap-20">
        {config.features.map((v) => (
          <Feature {...v} key={v.title} />
        ))}
      </div>

      <config.shape className="absolute -left-[2.7rem] top-[8rem] h-[5rem] lg:-left-[3rem] lg:top-[10.6rem] lg:h-[6.8rem]" />
      <Cta className="unrelatedContentSpacing" />
    </Page>
  );
};

export default index;
