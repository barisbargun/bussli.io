import { PageTitle } from "@/components/others";
import { mainText, pricingText } from "@/config/pages";
import { Page } from "@/layouts";
import { Card, Faq } from "./components";

const config = mainText.pricing;
const index = () => {
  return (
    <Page className="relative bg-indigo-600" secondClassName="static">
      <PageTitle
        className="text-white"
        title={config.title}
        desc={config.desc}
      />
      <div className="firstContentSpacing z-10 flex gap-10 max-lg:flex-wrap max-sm:px-12 max-lg:sm:justify-center lg:justify-between">
        {config.packages.map((card, i) => (
          <Card className="max-lg:sm:w-[calc(50%-1.25rem)]" key={i} {...card} />
        ))}
      </div>

      <div className="relatedContentSpacing flex justify-between gap-10 max-sm:flex-col">
        {pricingText.faq.faqs.slice(0, 2).map((v, i) => (
          <Faq key={i} {...v} />
        ))}
      </div>

      <div className="rectangleGradient absolute -left-4 top-[6.5rem] h-[31.6rem] w-[20%] rounded-xl border-[3px] border-solid border-white/10 opacity-50"></div>
    </Page>
  );
};

export default index;
