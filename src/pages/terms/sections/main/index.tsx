import { PageTitle } from "@/components/others";
import { termsText } from "@/config/pages";
import { Page } from "@/layouts";
import { Statement } from "./components";

const config = termsText;
const index = () => {
  return (
    <Page page="FirstPage">
      <PageTitle
        title={config.title}
        titleType="mainTitle"
        desc={config.desc}
        useMotion={false}
      />

      <article className="firstContentSpacing flex flex-col gap-10">
        <Statement desc={[config.statementDesc]}/>
        <Statement title={config.license.title} desc={[config.license.desc]}/>
        <Statement descType="points" title={config.security.title} desc={config.security.descList}/>
        <Statement title={config.embedded.title} desc={config.embedded.descList}/>
        <Statement title={config.changes.title} desc={[config.changes.desc]}/>
      </article>
    </Page>
  );
};

export default index;
