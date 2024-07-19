import { baseConfig } from "@/config";
import { Cta } from "../others";
import { footerText } from "@/config/pages/components";
import { MenuLink } from "./components";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="flex w-full justify-center bg-gray-900 py-[3.75rem] text-white lg:py-[5.625rem]">
      <div className="pageXSpacing">
        <Cta />
        <div className="relatedContentSpacing flex max-lg:flex-col-reverse max-lg:gap-24">
          <div className="lg:max-w-[20rem]">
            <h3 className="text-3xl font-bold tracking-tight">
              {baseConfig.logo.name}
            </h3>
            <p className="mb-12 mt-8 font-light leading-7 opacity-70">
              {footerText.desc}
            </p>
            <div className="flex items-center gap-7">
              {footerText.socialMedia.map((v, i) => (
                <Link key={i} to={v.to}>
                  <v.icon
                    pathClassName="group-hover:fill-indigo-400 transition-colors duration-100"
                    className="group size-7 sm:size-6 lg:size-5"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:ml-12 grid grid-cols-2 sm:flex flex-1 justify-between gap-x-10 gap-y-20 sm:gap-12">
            {footerText.links.map((v) => (
              <MenuLink key={v.title} {...v} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
