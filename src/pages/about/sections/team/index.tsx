import { PageTitle } from "@/components/others";
import { aboutText } from "@/config/pages";
import { Page } from "@/layouts";
import { Card } from "./components";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HoverEffect } from "@/components/custom/buttons";

const config = aboutText.team;
const index = () => {
  return (
    <Page>
      <PageTitle title={config.title} desc={config.desc} />

      <article className="firstContentSpacing grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
        {config.members.map((v, i) => (
          <Card key={i} {...v} />
        ))}
        <div className="flex-center h-full w-full">
          <Link
            to={config.link.to}
            className="relative flex-center gap-3 text-xl font-bold text-indigo-600"
          >
            {config.link.title}
            <ArrowRight />
            <HoverEffect light={false}  />
          </Link>
        </div>
      </article>
    </Page>
  );
};

export default index;
