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
  const HT = titleType == "mainTitle" ? "h1" : "h2";

  return (
    <div
      {...props}
      className={cn(
        "mx-auto flex flex-col max-lg:px-8",
        titleType == "mainTitle" ? "max-w-[42rem]" : "max-w-[35rem]",
        className,
      )}
    >
      {nav && (
        <h6 className={cn("pageNavTitle", title && "mb-[10px] lg:mb-4")}>
          {nav}
        </h6>
      )}
      {title && (
        <HT
          className={cn(
            titleType,
            nav && desc ? "mb-[5px] lg:mb-3" : desc && "mb-[10px] lg:mb-4",
          )}
        >
          {title}
        </HT>
      )}
      {desc && <p className="pageDesc">{desc}</p>}
    </div>
  );
};

export default PageTitle;
