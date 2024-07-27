import { cn } from "@/lib/utils";
import { use } from "i18next";
import React, { useEffect, useState } from "react";

type Props = React.HTMLProps<HTMLDivElement> & {
  isChecked: (v: boolean) => void;
  checkedColor?: string;
};

const ToggleButton = ({
  isChecked,
  className,
  checkedColor = "bg-indigo-600",
  ...props
}: Props) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => isChecked(checked), [checked]);

  return (
    <div
      {...props}
      className={cn(
        "relative h-7 w-16 cursor-pointer rounded-full bg-gray-200 transition-colors duration-150",
        checked && checkedColor,
        className,
      )}
      onClick={() => setChecked(!checked)}
      aria-label="Toggle"
      aria-checked={checked}
      role="checkbox"
    >
      <div
        className={cn(
          "absolute left-1 top-1 h-5 w-5 rounded-full border border-black/10 bg-white transition-all duration-150",
          checked && "left-9",
        )}
      ></div>
    </div>
  );
};

export default ToggleButton;
