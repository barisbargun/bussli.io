import {
  ImageHoverEffect,
  ImageHoverItem,
  ImageHoverProvider,
} from "@/components/custom/others";
import { aboutText } from "@/config/pages";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> &
  (typeof aboutText.team.members)[0];

const Card = ({ img, name, role, ...props }: Props) => {
  return (
    <div {...props} className={cn("w-full", props.className)}>
      <ImageHoverProvider>
        <ImageHoverEffect />
        <ImageHoverItem
          src={img}
          alt={name + " img"}
          className="aspect-[16/22]"
        />
      </ImageHoverProvider>
      <div className="mt-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="opacity-70">{role}</p>
      </div>
    </div>
  );
};

export default Card;
