import { pageLinks } from "@/config";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const GetStartedButton = ({ children, ...props }: Props) => {
  return (
    <Link to={pageLinks.contact.url}>
      <button
        {...props}
        className={cn(
          "h-[1.9rem] w-[8.7rem] xl:h-[50px] xl:w-[200px]",
          "text-center text-xs font-bold text-white xl:text-lg",
          "rounded-lg border border-solid border-indigo-500 bg-indigo-600 transition-all duration-200 hover:bg-indigo-800 active:bg-indigo-950",
          props.className,
        )}
      >
        {children ? children : "Get Started"}
      </button>
    </Link>
  );
};

export default GetStartedButton;
