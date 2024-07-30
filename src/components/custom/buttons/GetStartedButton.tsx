import { pageLinks } from "@/config";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const GetStartedButton = ({ children, ...props }: Props) => {
  return (
    <Link className="w-fit" to="/contact">
      <button
        {...props}
        className={cn("indigoButton text-nowrap", props.className)}
      >
        {children ? children : "Get Started"}
      </button>
    </Link>
  );
};

export default GetStartedButton;
