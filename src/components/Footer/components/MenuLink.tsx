import { footerText } from "@/config/pages/components";
import { Link } from "react-router-dom";

type Props = (typeof footerText.links)[0];

const MenuLink = ({ items, title }: Props) => {
  return (
    <div>
      <h5 className="mb-4 opacity-70 font-light">{title}</h5>
      <ul className="flex flex-col gap-3">
        {items.map((v) => (
          <li key={v.title}>
            <Link className="font-lg tracking-tight hover:text-indigo-400 transition-colors duration-100" to={v.to}>
              {v.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuLink;
