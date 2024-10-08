import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
  TooltipProvider,
} from "@/components/ui";

import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  trigger: any;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
};

const Tooltip = ({ trigger, children, side = "bottom", ...props }: Props) => {
  return (
    <TooltipProvider delayDuration={200}>
      <HybridTooltip>
        <HybridTooltipTrigger>{trigger}</HybridTooltipTrigger>
        <HybridTooltipContent
          {...props}
          className={cn(
            "!z-50 w-fit max-w-[15rem] break-all rounded-lg border border-gray-200 bg-white px-3 py-2 text-lg text-slate-900 shadow-md lg:text-base",
            props.className,
          )}
          side={side}
        >
          {children}
        </HybridTooltipContent>
      </HybridTooltip>
    </TooltipProvider>
  );
};

export default Tooltip;
