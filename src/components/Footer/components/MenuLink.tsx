import { footerText } from "@/config/pages/components";
import { Link } from "react-router-dom";

type Props = (typeof footerText.links)[0];

const MenuLink = ({ items, title }: Props) => {
  return (
    <div>
      <h3 className="mb-8 sm:mb-4 opacity-70 font-light max-sm:text-[1.4rem]">{title}</h3>
      <ul className="flex flex-col gap-8 sm:gap-3">
        {items.map((v) => (
          <li key={v.title}>
            <Link className="text-[1.6rem] sm:text-lg tracking-tight hover:text-indigo-400 transition-colors duration-100" to={v.to}>
              {v.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuLink;
