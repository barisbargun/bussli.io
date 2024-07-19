import {
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import assets from "@/config/assets";
import topbar from "@/config/nav/topbar";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <DropdownMenuComponent>
      <DropdownMenuTrigger>
        <img loading="lazy"
          src={assets.svg.icons.alignLeft}
          className="size-6"
          alt="dropdown"
          aria-label="dropdown"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent alignOffset={-100} align="start">
        <DropdownMenuLabel>Bussli.io</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {topbar.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link className="w-full max-lg:py-1" to={item.url}>{item.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenuComponent>
  );
};

export default DropdownMenu;
