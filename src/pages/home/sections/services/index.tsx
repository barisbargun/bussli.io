import { PageTitle } from "@/components/others";
import { mainText } from "@/config/pages";
import { Card } from "./components";
import { Page } from "@/layouts";

const config = mainText.services;
const index = () => {
  return (
    <Page className="pageBottomSpacing">
      <PageTitle
        nav={config.nav}
        title={config.title}
      />
      <div className="firstContentSpacing z-10 flex w-full justify-between gap-10 text-white max-lg:flex-wrap max-lg:px-[2rem] max-sm:px-[4rem]">
        {config.cards.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </div>
      <div className="relative">
        <config.shape className="absolute -bottom-[4.6rem] -right-[0rem] w-[19.6rem] lg:-right-[1.5rem] xl:-right-[2.5rem]" />
      </div>
    </Page>
  );
};

export default index;
