import { mainText } from "@/config/pages";

type Props = (typeof mainText.main.company.companies)[0];

const Company = ({ icon, title }: Props) => {
  return (
    <div className="flex-center gap-1 md:gap-2">
      <img
        src={icon}
        alt="company-logo"
        className="size-[1.87rem] lg:size-9 xl:size-11"
      />
      <p className="font-semibold max-sm:text-xs lg:text-sm xl:text-lg 2xl:text-xl">
        {title}
      </p>
    </div>
  );
};

export default Company;
