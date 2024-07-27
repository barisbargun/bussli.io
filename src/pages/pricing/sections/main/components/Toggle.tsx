import { ToggleButton } from "@/components/custom/buttons";
import { pricingText } from "@/config/pages";

type Props = {
  isChecked: (v: boolean) => void;
};

const Toggle = ({ isChecked }: Props) => {
  return (
    <div className="flex-center gap-4 text-lg">
      <p>Monthly</p>
      <ToggleButton isChecked={(v) => isChecked(v)} />
      <div className="flex-center gap-3">
        <p>Yearly</p>
        <div className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-bold uppercase tracking-[1.4px] text-indigo-600">
          Save {pricingText.pricingPackages.discount}%
        </div>
      </div>
    </div>
  );
};

export default Toggle;
