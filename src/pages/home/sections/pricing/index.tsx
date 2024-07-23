import { PageTitle } from "@/components/others";
import { mainText, pricingText } from "@/config/pages";
import { Page } from "@/layouts";
import { Card, Faq } from "./components";

const config = mainText.pricing;
const index = () => {
  return (
    <Page page="Page" className="bg-indigo-600 relative" secondClassName="static">
      <PageTitle
        className="mx-auto max-w-[40rem] text-center text-white"
        title={config.title}
        desc={config.desc}
      />
      <div className="z-10 firstContentSpacing flex justify-between gap-10">
        {config.packages.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>

      <div className="relatedContentSpacing flex justify-between">
        {pricingText.faq.faqs.slice(0, 2).map((v, i) => (
          <Faq key={i} {...v} />
        ))}
      </div>

      <div className="absolute top-[6.5rem] -left-4 h-[31.6rem] w-[20%] rounded-xl border-[3px] border-solid border-white/10 rectangleGradient opacity-50"></div>
    </Page>
  );
};

export default index;
