import { baseConfig } from "@/config";
import topbar from "@/config/nav/topbar";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { DropdownMenu } from "./components";
import { useWindowSize } from "@/hooks";
import { GetStartedButton } from "@/components/custom/buttons";

const index = () => {
  const windowSize = useWindowSize();

  return (
    <nav className="navSpacing flex items-center justify-between gap-5 lg:justify-center">
      <Link to={"/"}>
        <strong className="logoTitle hover:text-indigo-500">
          {baseConfig.logo.name}
        </strong>
      </Link>
      {windowSize >= 3 ? (
        <>
          <ul className="relative ml-[5.625rem] flex items-center gap-10">
            {topbar.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    cn(
                      "relative text-nowrap font-semibold hover:text-indigo-600 max-xl:text-sm xl:font-bold",
                      isActive &&
                        "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:transition-all after:duration-300 after:ease-in-out",
                    )
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
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
