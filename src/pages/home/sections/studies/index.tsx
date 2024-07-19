import { PageTitle } from "@/components/others";
import { mainText } from "@/config/pages";
import { Page } from "@/layouts";
import { Product } from "./components";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { HoverEffect } from "@/components/custom/buttons";

const config = mainText.studies;
const index = () => {
  return (
    <Page secondClassName="alskdal">
      <PageTitle
        nav={config.nav}
        title={config.title}
      />
      <div className="mt-[3.1rem] flex justify-between gap-[5.6rem]">
        <div className="flex flex-1 flex-col gap-14 lg:gap-[3.75rem]">
          <Product
            {...config.products[0]}
            img={config.productImages[0]}
            size="long"
          />
          <Product {...config.products[1]} img={config.productImages[1]} />
        </div>
        <div className="flex flex-1 flex-col gap-14 lg:gap-[3.75rem]">
          <Product {...config.products[2]} img={config.productImages[2]} />

          <Product
            {...config.products[3]}
            img={config.productImages[3]}
            size="long"
          />
        </div>
      </div>

      <Link
        className="relatedContentSpacing flex-center relative m-auto gap-2 text-lg font-bold tracking-[-1.2px] text-indigo-600"
        to={config.link.to}
      >
        {config.link.title}
        <ArrowRightIcon className="size-5" />
        <HoverEffect light={false} />
      </Link>
    </Page>
  );
};

export default index;
