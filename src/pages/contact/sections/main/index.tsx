import { PageTitle } from "@/components/others";
import { contactText } from "@/config/pages";
import { Page } from "@/layouts";
import { ContactInfo, Form } from "./components";

const config = contactText;
const contact = [config.phone, config.email, config.location];
const index = () => {
  return (
    <Page page="FirstPage" className="pageGradient">
      <PageTitle title={config.title} titleType="mainTitle" />

      <article className="firstContentSpacing flex flex-col max-lg:flex-col-reverse">
        <div className="max-lg:relatedContentSpacing mx-auto flex gap-16 max-sm:flex-col sm:justify-center sm:max-lg:flex-wrap lg:w-full lg:justify-between">
          {contact.map((v, i) => (
            <ContactInfo {...v} key={i} />
          ))}
        </div>
        <div className="lg:relatedContentSpacing max-lg:mx-auto max-lg:max-w-[40rem] lg:bg-white px-1 lg:p-10">
          <Form />
        </div>
      </article>
    </Page>
  );
};

export default index;
