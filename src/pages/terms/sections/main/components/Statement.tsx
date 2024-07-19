import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  desc: string[];
  descType?: "normal" | "points";
};

const Statement = ({ title, desc, descType, ...props }: Props) => {
  return (
    <div {...props}>
      {title && <h3 className="font-bold mb-3">{title}</h3>}
      {desc.map((v, i) => (
        <div className="flex items-center gap-3 mb-2 last:mb-0">
          {descType == "points" && (
            <span className="size-2 rounded-full bg-black" />
          )}
          <p key={i} className={"opacity-90 leading-7 w-fit"}>
            {v}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statement;
