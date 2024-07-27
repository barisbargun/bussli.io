import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  nav?: string;
  title?: string;
  titleType?: "mainTitle" | "pageTitle";
  desc?: string;
  className?: string;
  mobilePadding?: boolean;
}

const PageTitle = ({
  nav,
  title,
  titleType = "pageTitle",
  desc,
  className,
  mobilePadding = true,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col",
        mobilePadding && "px-mobilePadding",
        className,
      )}
    >
      {nav && (
        <h6 className={cn("pageNavTitle", title && "mb-[10px] lg:mb-4")}>
          {nav}
        </h6>
      )}
      {title && (
        <h1
          className={cn(
            titleType,
            nav && desc ? "mb-[5px] lg:mb-3" : desc && "mb-[10px] lg:mb-4",
          )}
        >
          {title}
        </h1>
      )}
      {desc && <p className="pageDesc">{desc}</p>}
    </div>
  );
};

export default PageTitle;
