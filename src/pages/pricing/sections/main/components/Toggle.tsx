import { ToggleButton } from "@/components/custom/buttons";
import { pricingText } from "@/config/pages";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  isChecked: (v: boolean) => void;
};

const Toggle = ({ isChecked, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn("flex-center gap-4 text-lg", props.className)}
    >
      <p>Monthly</p>
      <ToggleButton isChecked={(v) => isChecked(v)} />
      <div className="flex-center gap-3">
        <p>Yearly</p>
        <div className="font-poppins rounded-full bg-indigo-600/10 px-4 py-1.5 text-xs lg:text-sm font-bold uppercase tracking-wide text-indigo-600">
          Save {pricingText.pricingPackages.discount}%
        </div>
      </div>
    </div>
  );
};

export default Toggle;
