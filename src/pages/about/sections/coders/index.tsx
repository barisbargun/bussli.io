import { PageTitle } from "@/components/others";
import { aboutText } from "@/config/pages";
import { Page } from "@/layouts";
import { ImageContainer } from "./components";

const config = aboutText.coders;
const index = () => {
  return (
    <Page
      className="pageGradient"
      secondClassName="lg:flex-row items-center"
    >
      <PageTitle
        title={config.title}
        desc={config.desc}
        className="lg:ml-0 lg:max-w-[25rem] lg:text-left"
      />
      
      <article className="max-lg:firstContentSpacing flex lg:w-[25rem] gap-6 xl:w-[29rem]">
        <ImageContainer sources={config.images.slice(0, 2)} />
        <ImageContainer className="pt-16 lg:pt-9" sources={config.images.slice(2, 4)} />
      </article>
    </Page>
  );
};

export default index;
// h-[30rem] xl:h-[35rem]
