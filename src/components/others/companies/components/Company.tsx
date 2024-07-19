import { companyText } from "@/config/pages/components";

type Props = (typeof companyText.companies)[0];

const Company = ({ icon, title }: Props) => {
  return (
    <div className="flex-center gap-1 md:gap-2">
      <img
        loading="lazy"
        src={icon}
        alt="company-logo"
        className="size-[1.87rem] lg:size-9 xl:size-11"
      />
      <p className="text-xl font-semibold lg:text-lg">{title}</p>
    </div>
  );
};

export default Company;
