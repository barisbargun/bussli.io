import { PageTitle } from "@/components/others";
import { mainText } from "@/config/pages";
import { Card } from "./components";
import { Page } from "@/layouts";

const config = mainText.services;
const index = () => {
  return (
    <Page page="Page">
      <PageTitle
        className="m-auto w-[41rem] text-center"
        nav={config.nav}
        title={config.title}
      />
      <div className="firstContentSpacing z-10 flex w-full justify-between gap-10 text-white">
        {config.cards.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </div>
      <div className="relative mb-[9rem]">
        <config.shape className="absolute -bottom-[4.6rem] -right-[2.48rem] w-[19.6rem]" />
      </div>
    </Page>
  );
};

export default index;
