import { mainText } from "@/config/pages";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = (typeof mainText.studies.products)[0] &
  HTMLAttributes<HTMLDivElement> & {
    img: string;
    size?: "base" | "long";
  };

const Product = ({ nav, title, img, size = "base", ...props }: Props) => {
  return (
    <div {...props}>
      <img loading="lazy"
        src={img}
        alt="product-img"
        className={cn(
          "w-full rounded-lg object-cover", 
          size == "long" ? "h-[13.5rem] sm:h-[20rem] lg:h-[33.75rem]" : "h-[8.5rem] sm:h-[12.6rem] lg:h-[21.3rem]",
        )}
      />
      <div className="mt-8 flex flex-col pl-0 lg:pl-2">
        <p className="text-sm opacity-70">{nav}</p>
        <h3 className="mt-1 text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default Product;
