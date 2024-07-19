import { Companies, PageTitle } from "@/components/others";
import { pricingText } from "@/config/pages";
import { Page } from "@/layouts";
import { useState } from "react";
import { Card, Toggle } from "./components";

const config = pricingText.main;
const index = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Page page="FirstPage">
      <PageTitle
        title={config.title}
        titleType="mainTitle"
        desc={config.desc}
      />
      <Toggle className="firstContentSpacing" isChecked={setChecked} />

      <ul className="mt-10 flex justify-center gap-8 max-lg:flex-wrap lg:justify-between 2xl:gap-12">
        {Object.values(config.packages).map((v, i) => (
          <Card
            key={v.cost}
            type={v.type}
            cost={v.cost}
            to={v.to}
            discount={pricingText.pricingPackages.discount}
            isMonthly={!checked}
            featureList={config.packageFeatures}
            featureCount={v.featureCount}
            isCreditCardRequire={v.isCreditCardRequire}
            fillColor={i === 2}
          />
        ))}
      </ul>
      <Companies className="unrelatedContentSpacing w-full" />
    </Page>
  );
};

export default index;
