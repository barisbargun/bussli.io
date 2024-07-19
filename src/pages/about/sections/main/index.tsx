import { PageTitle } from "@/components/others";
import { aboutText } from "@/config/pages";
import { Page } from "@/layouts";

const config = aboutText.main;
const index = () => {
  return (
    <Page
      page="FirstPage"
      secondClassName="items-center "
    >
      <PageTitle
        title={config.title}
        titleType="mainTitle"
        desc={config.desc}
      />
      <img loading="lazy"
        src={config.img.src}
        alt={config.img.alt}
        className="firstContentSpacing w-full rounded-xl"
      />
      <div className="relatedContentSpacing flex justify-between  gap-5 max-sm:flex-col  sm:gap-20">
        <h2 className="text-4xl font-bold tracking-tight sm:flex-[0_0_45%]">
          {config.bottom.title}
        </h2>
        <div className="flex flex-auto flex-col gap-6">
          {config.bottom.descList.map((v, i) => (
            <p className="text-lg leading-8 opacity-70" key={i}>
              {v}
            </p>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default index;
