"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Popover, PopoverTrigger, PopoverContent } from ".";
import {
  TooltipContentProps,
  TooltipProps,
  TooltipTriggerProps,
} from "@radix-ui/react-tooltip";
import {
  PopoverContentProps,
  PopoverProps,
  PopoverTriggerProps,
} from "@radix-ui/react-popover";

const TouchContext = createContext<boolean | undefined>(undefined);
const useTouch = () => useContext(TouchContext);

const TooltipProvider = (props: TooltipPrimitive.TooltipProviderProps) => {
  const [isTouch, setTouch] = useState<boolean>();

  useEffect(() => {
    setTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <TouchContext.Provider value={isTouch}>
      <TooltipPrimitive.Provider {...props}>{props.children}</TooltipPrimitive.Provider>
    </TouchContext.Provider>
  );
};

const HybridTooltip = (props: TooltipProps & PopoverProps) => {
  const isTouch = useTouch();
  const Content = isTouch ? Popover : TooltipPrimitive.Tooltip;
  return <Content {...props} />;
};

const HybridTooltipTrigger = (
  props: TooltipTriggerProps & PopoverTriggerProps,
) => {
  const isTouch = useTouch();
  const Content = isTouch ? PopoverTrigger : TooltipPrimitive.Trigger;
  return <Content {...props} />;
};

const HybridTooltipContent = (
  props: TooltipContentProps & PopoverContentProps,
) => {
  const isTouch = useTouch();
  const Content = isTouch ? PopoverContent : TooltipPrimitive.Content;
  return <Content {...props} />;
};

export {
  TooltipProvider,
  HybridTooltip,
  HybridTooltipTrigger,
  HybridTooltipContent,
};
