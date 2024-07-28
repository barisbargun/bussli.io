import { PageTitle } from "@/components/others";
import { pricingText } from "@/config/pages";
import { Page } from "@/layouts";
import { Feature } from "./components";

const config = pricingText.comparePlans;
const packages = Object.keys(pricingText.pricingPackages.packages);
const index = () => {
  return (
    <Page className="pageGradient">
      <PageTitle className="text-center" title={config.title} />

      <article className="firstContentSpacing flex w-full flex-col gap-10 lg:gap-7 overflow-hidden !overflow-x-scroll">
        <Feature
          f="Features"
          tip=""
          b={packages[0]}
          s={packages[1]}
          p={packages[2]}
          isTitle={true}
        />
        {config.features.map((f, i) => (
          <Feature key={i} {...f} />
        ))}
      </article>
    </Page>
  );
};

export default index;
