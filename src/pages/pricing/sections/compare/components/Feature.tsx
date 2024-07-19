import { Tooltip } from "@/components/custom/others";
import { pricingText } from "@/config/pages";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleHelp } from "lucide-react";

type Props = React.HTMLAttributes<HTMLDivElement> &
  (typeof pricingText.comparePlans.features)[0] & {
    isTitle?: boolean;
  };

const titleColors = ["text-emerald-600", "text-red-600", "text-indigo-600"];
const Feature = ({ f, tip, b, s, p, isTitle = false, ...props }: Props) => {
  return (
    <div {...props} className={cn("flex max-sm:w-[120vw]", isTitle && "mb-5 lg:mb-3", props.className)}>
      <div className="flex items-center gap-1.5 flex-[0_0_48%] xl:flex-[0_0_52%]">
        <p
          className={cn(
            "capitalize",
            isTitle ? "text-xl font-bold" : "font-medium",
          )}
        >
          {f}
        </p>
        {!isTitle && (
          <Tooltip
            trigger={
              <CircleHelp className="cursor-default  size-8 lg:size-7 opacity-20" />
            }
          >
            {tip}
          </Tooltip>
        )}
      </div>
      <div className="grid flex-auto grid-cols-3 gap-8 lg:gap-20">
        {[b, s, p].map((v, i) => (
          <div key={i} className="flex-center text-center">
            {isTitle ? (
              <h3
                className={cn(
                  "text-xl font-semibold capitalize",
                  titleColors[i],
                )}
              >
                {v}
              </h3>
            ) : (
              <div className="font-medium">
                {v === true ? (
                  <CircleCheck className="size-6 text-indigo-600" />
                ) : (
                  v 
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
