import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  nav?: string;
  title?: string;
  titleType?: "mainTitle" | "pageTitle";
  desc?: string;
  className?: string;
}

const PageTitle = ({
  nav,
  title,
  titleType = "pageTitle",
  desc,
  className,
  ...props
}: Props) => {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {nav && (
        <h6 className={cn("pageNavTitle", title && "navTitleSpacing")}>
          {nav}
        </h6>
      )}
      {title && (
        <h1 className={cn(titleType, desc && "titleDescSpacing")}>{title}</h1>
      )}
      {desc && <p className="pageDesc">{desc}</p>}
    </div>
  );
};

export default PageTitle;
