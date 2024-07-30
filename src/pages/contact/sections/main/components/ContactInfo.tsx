import { contactText } from "@/config/pages";
import { splitIntoChucks } from "@/helpers";
import { useMemo } from "react";

type Props = Omit<typeof contactText.phone, "list"> & {
  list?: string[];
  address?: string;
};

const ContactInfo = ({ title, list, address, icon: Icon }: Props) => {
  const Description = ({ children }: { children: React.ReactNode }) => {
    return <p className="pb-1 opacity-70 last:pb-0 max-lg:text-2xl">{children}</p>;
  };

  const descList = useMemo(
    () => (list ? list : address ? splitIntoChucks(address, 3) : []),
    [list, address],
  );

  return (
    <div className="flex gap-6">
      <Icon className="size-8 lg:size-6 text-indigo-600" />
      <div>
        <h3 className="mb-1 text-2xl lg:text-xl font-bold">{title}</h3>
        <div>
          {descList?.map((item, index) => (
            <Description key={index}>{item}</Description>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
