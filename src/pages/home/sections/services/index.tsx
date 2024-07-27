import { PageTitle } from "@/components/others";
import { mainText } from "@/config/pages";
import { Card } from "./components";
import { Page } from "@/layouts";

const config = mainText.services;
const index = () => {
  return (
    <Page className="pageBottomSpacing" page="Page">
      <PageTitle
        className="m-auto max-w-[41rem] text-center"
        nav={config.nav}
        title={config.title}
      />
      <div className="firstContentSpacing max-sm:px-[4rem] max-lg:px-[2rem] z-10 flex w-full justify-between gap-10 text-white max-lg:flex-wrap">
        {config.cards.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </div>
      <div className="relative ">
        <config.shape className="absolute -bottom-[4.6rem] -right-[0rem] lg:-right-[1.5rem] xl:-right-[2.5rem] w-[19.6rem]" />
      </div>
    </Page>
  );
};

export default index;
