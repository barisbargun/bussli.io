import { companyText } from "@/config/pages/components";
import { Company } from "./components";
import { cn } from "@/lib/utils";

const config = companyText;
const index = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex-center gap-3 max-lg:flex-col-reverse max-lg:gap-5 lg:flex-col",
        className,
      )}
    >
      <p className="text-xs opacity-65">{config.title}</p>
      <div className="grid w-full grid-cols-2 items-center justify-between max-lg:gap-[2rem] md:flex">
        {config.companies.map((v, i) => (
          <Company key={i} {...v} />
        ))}
      </div>
    </div>
  );
};

export default index;
