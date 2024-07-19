import { PageTitle } from "@/components/others";
import { pricingText } from "@/config/pages";
import { Page } from "@/layouts";
import { Accordion } from "./components";
import { Accordion as AccordionComponent } from "@/components/ui";
import { Link } from "react-router-dom";

const config = pricingText.faq;
const index = () => {
  return (
    <Page className="pageGradient">
      <PageTitle
        title={config.title}
        desc={config.desc}
      />

      <AccordionComponent
        className="firstContentSpacing flex flex-col gap-3"
        type="single"
        collapsible
        defaultValue="0"
      >
        {config.faqs.map((v, i) => (
          <Accordion index={i} key={i} q={v.q} a={v.a} to={v.to} />
        ))}
      </AccordionComponent>
      <div className="mt-10 text-center text-lg tracking-tight">
        <p className="inline">{config.cta.title}</p>
        <Link
          to={config.cta.link.to}
          className="ml-2 text-indigo-600 hover:text-indigo-500 active:text-indigo-400"
        >
          {config.cta.link.title}
        </Link>
      </div>
    </Page>
  );
};

export default index;
