import { GetStartedButton } from "@/components/custom/buttons";
import { mainText } from "@/config/pages";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> &
  (typeof mainText.pricing.packages)[0] & {};

const Card = ({ type, price, isMonthly, desc, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center rounded-lg bg-white max-sm:py-10 px-7 pb-5 pt-9 text-center",
        className,
      )}
    >
      <p className="w-fit rounded-xl bg-indigo-600/10 px-[0.62rem] py-[0.37rem] font-bold uppercase tracking-[0.1rem] text-indigo-600 ">
        {type}
      </p>
      <h3 className="mb-[0.3rem] mt-[1.8rem] text-5xl font-bold tracking-[-1.8px]">
        ${price}
      </h3>
      <p className="opacity-70 text-base">billed {isMonthly ? "monthly" : "yearly"}</p>
      <p className="mb-14 mt-10 text-xl max-sm:leading-[150%] sm:text-lg">{desc}</p>
      <GetStartedButton className="mt-auto box-content px-5">
        Get started for free
      </GetStartedButton>
    </div>
  );
};

export default Card;
