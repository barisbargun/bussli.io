import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  secondClassName?: string;
  page: "MainFirstPage" | "FirstPage" | "Page";
}

const Page = ({
  children,
  className,
  secondClassName,
  page,
  ...props
}: Props) => {
  return (
    <div {...props} className={cn("flex w-full justify-center", className)}>
      <div
        className={cn(
          "w-full",
          page == "MainFirstPage"
            ? "mainFirstPageSpacing"
            : page == "FirstPage"
              ? "firstPageSpacing"
              : "pageSpacing",
          secondClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
