import { cn } from "@/lib/utils";

export const ImageHoverProvider = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "group relative h-fit w-full overflow-hidden rounded-xl [&_*]:transition-all [&_*]:duration-500",
        props.className,
      )}
    />
  );
};

export const ImageHoverEffect = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "absolute left-0 top-0 z-10 h-full w-full group-hover:bg-black/20",
        props.className,
      )}
    />
  );
};

export const ImageHoverItem = ({
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      loading="lazy"
      {...props}
      className={cn(
        "h-full w-full object-cover group-hover:scale-110 lg:rounded-lg",
        className,
      )}
    />
  );
};
