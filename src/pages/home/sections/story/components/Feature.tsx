import { mainText } from "@/config/pages";

type Props = (typeof mainText.story.features)[0];

const Feature = ({ desc, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="text-5xl font-bold tracking-[-1.8px]">{title}</h3>
      <p className="text-2xl sm:text-lg opacity-70">{desc}</p>
    </div>
  );
};

export default Feature;
