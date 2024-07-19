import {
  ImageHoverEffect,
  ImageHoverItem,
  ImageHoverProvider,
} from "@/components/custom/others";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  sources: string[];
};

const ImageContainer = ({ sources, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn("flex h-full w-1/2 flex-col gap-6", props.className)}
    >
      {sources.map((v, i) => (
        <ImageHoverProvider key={i}>
          <ImageHoverEffect />
          <ImageHoverItem src={v} alt="coder" />
        </ImageHoverProvider>
      ))}
    </div>
  );
};

export default ImageContainer;
