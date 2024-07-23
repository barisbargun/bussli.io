import { Cta, PageTitle } from "@/components/others";
import { mainText } from "@/config/pages";
import { Feature } from "./components";
import { Page } from "@/layouts";

const config = mainText.choose;
const index = () => {
  return (
    <Page
      page="Page"
      className="pageGradient relative"
      secondClassName="items-center static"
    >
      <PageTitle
        nav={config.nav}
        title={config.title}
        className="max-w-[36rem] text-center"
      />
      <div className="firstContentSpacing grid max-w-[56rem] grid-cols-2 gap-20">
        {config.features.map((v) => (
          <Feature {...v} key={v.title} />
        ))}
      </div>

      <config.shape className="absolute -left-[3rem] top-[10.6rem] h-[6.8rem]" />
      <Cta className="unrelatedContentSpacing"/>
    </Page>
  );
};

export default index;
