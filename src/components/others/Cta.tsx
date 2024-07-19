import { cn } from "@/lib/utils";
import { GetStartedButton } from "../custom/buttons";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const CTA = ({ className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn("flex w-full items-center justify-between gap-16", className)}
    >
      <div>
        <h3 className="text-3xl font-bold tracking-[-1.2px]">
          Ready to launch your next project?
        </h3>
        <p className="mt-2 text-lg opacity-70">
          Create your next landing page effortlessly with unique, code-free
          blocks.
        </p>
      </div>
      <GetStartedButton />
    </div>
  );
};

export default CTA;
