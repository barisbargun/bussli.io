import { baseConfig } from "@/config";
import topbar from "@/config/nav/topbar";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { ActiveBar, DropdownMenu } from "./components";
import { useWindowSize } from "@/hooks";
import { GetStartedButton } from "@/components/custom/buttons";

const index = () => {
  const windowSize = useWindowSize();

  return (
    <nav className="navSpacing flex items-center justify-between gap-5 lg:justify-center">
      <Link to={"/"}>
        <h2 className="logoTitle hover:text-indigo-500">
          {baseConfig.logo.name}
        </h2>
      </Link>
      {windowSize >= 3 ? (
        <>
          <ul className="relative ml-[2rem] flex items-center gap-10 xl:ml-[4.5rem] xl:gap-12 2xl:ml-[5.625rem]">
            {topbar.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.url}
                  className={cn(
                    "text-nowrap font-semibold hover:text-indigo-600 max-xl:text-sm xl:font-bold",
                  )}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <ActiveBar />
          </ul>
          <span className="flex-grow"></span>
          <div className="float-right"></div>
          <GetStartedButton />
        </>
      ) : (
        <div>
          <DropdownMenu />
        </div>
      )}
    </nav>
  );
};

export default index;
