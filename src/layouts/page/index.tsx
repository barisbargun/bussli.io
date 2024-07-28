import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  secondClassName?: string;
  page?: "MainFirstPage" | "FirstPage" | "Page";
}

const Page = ({
  children,
  className,
  secondClassName,
  page="Page",
  ...props
}: Props) => {
  return (
    <section {...props} className={cn("flex w-full justify-center", className)}>
      <div
        className={cn(
          "relative flex w-full flex-col [&>article]:overflow-hidden",
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
    </section>
  );
};

export default Page;
