import { PageTitle } from "@/components/others";
import { pricingText } from "@/config/pages";
import { Page } from "@/layouts";
import { useState } from "react";
import { Toggle } from "./components";

const config = pricingText.main;
const index = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Page page="FirstPage" secondClassName="items-center">
      <PageTitle
        className="text-center"
        title={config.title}
        titleType="mainTitle"
        desc={config.desc}
      />
      <div className="firstContentSpacing flex-center gap-4 text-lg">
        <Toggle isChecked={setChecked} />
      </div>
    </Page>
  );
};

export default index;
