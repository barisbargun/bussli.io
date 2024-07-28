import { Button2 } from "@/components/custom/buttons";
import { pricingText } from "@/config/pages";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

type Props = React.HTMLAttributes<HTMLLIElement> &
  (typeof pricingText.main.packages)[0] & {
    discount: number;
    isMonthly: boolean;
    featureList: string[];
    fillColor?: boolean;
  };

const Card = ({
  discount,
  isMonthly,
  featureList,
  fillColor = false,
  ...props
}: Props) => {
  return (
    <li
      {...props}
      className={cn(
        "flex flex-col gap-8 lg:gap-6 rounded-2xl border-[3px] border-indigo-600 px-10 py-7 max-lg:max-w-[30rem] max-lg:basis-full lg:flex-1 lg:rounded-xl xl:px-12 xl:py-9",
        fillColor && "bg-indigo-600 text-white",
        props.className,
      )}
    >
      <h6 className="text-sm font-bold uppercase tracking-widest">
        {props.type}
      </h6>

      <div className="">
        <span className="text-2xl font-bold">$</span>
        <h3 className="-ml-0.5 inline text-7xl lg:text-6xl font-bold tracking-tighter">
          {isMonthly
            ? props.cost
            : Math.round((props.cost * 12 * (100 - discount)) / 100)}
        </h3>
        <span className="font-lg ml-0.5">
          /&nbsp;{isMonthly ? "month" : "year"}
        </span>
        <p className="mt-2 opacity-70 max-lg:text-xs xl:mt-1">
          billed {isMonthly ? "monthly" : "yearly"}
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        {featureList.map((v, i) => (
          <li
            className={
              (cn(props.featureCount <= i && "opacity-70"),
              "flex items-center gap-4 [&>svg]:size-8 xl:[&>svg]:size-7")
            }
            key={i}
          >
            {props.featureCount > i ? (
              <Check className="text-green-400" />
            ) : (
              <X className="opacity-30" />
            )}
            <span className="w-[90%]">{v}</span>
          </li>
        ))}
      </ul>

      <Button2
        to={props.to}
        title="Start Free Trial"
        className={cn(
          "mt-2 max-lg:max-w-[22rem]",
          fillColor && "bg-white/10 hover:bg-white/15 active:bg-white/20",
        )}
      />
      <p className="-mt-2 tracking-tight opacity-70 max-lg:text-xs">
        {props.isCreditCardRequire ? "C" : "No c"}redit card required
      </p>
    </li>
  );
};

export default Card;
