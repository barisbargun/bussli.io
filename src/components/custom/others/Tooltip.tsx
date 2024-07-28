import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  trigger: any;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
};

const Tooltip = ({ trigger, children, side = "bottom", ...props }: Props) => {
  return (
    <TooltipProvider delayDuration={200}>
      <TooltipComponent>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipContent {...props} className={props.className} side={side}>
          {children}
        </TooltipContent>
      </TooltipComponent>
    </TooltipProvider>
  );
};

export default Tooltip;
