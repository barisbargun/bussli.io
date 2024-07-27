import { mainText } from "@/config/pages";
import { cn } from "@/lib/utils";

type Props = (typeof mainText.choose.features)[0];

const Feature = ({ title, desc, icon, iconColor }: Props) => {
  return (
    <div className="flex gap-7 max-lg:flex-col">
      <div className={cn("rounded-2xl w-8 lg:w-20 p-4 lg:p-5 box-content h-fit", iconColor)}>
        <img src={icon} alt="icon" className="size-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold tracking-[-0.5px]">{title}</h3>
        <p className="text-lg leading-7 opacity-70">{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
