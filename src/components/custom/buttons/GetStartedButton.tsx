import { pageLinks } from "@/config";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const GetStartedButton = ({ children, ...props }: Props) => {
  return (
    <Link className="w-fit" to={pageLinks.contact.url}>
      <button
        {...props}
        className={cn(
          "h-12 min-w-48",
          "text-center font-bold text-white text-lg",
          "rounded-lg border border-solid border-indigo-500 bg-indigo-600 transition-all duration-100 hover:bg-indigo-700 active:bg-indigo-800",
          props.className,
        )}
      >
        {children ? children : "Get Started"}
      </button>
    </Link>
  );
};

export default GetStartedButton;