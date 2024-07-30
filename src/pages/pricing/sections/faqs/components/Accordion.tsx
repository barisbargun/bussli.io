import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { pricingText } from "@/config/pages";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> &
  (typeof pricingText.faq.faqs)[0] & {
    index: number;
  };

const Accordion = ({ q, a, to, index, ...props }: Props) => {
  return (
    <AccordionItem
      {...props}
      className={cn("border-gray-200 border px-6 py-2 rounded-xl", props.className)}
      value={index + ""}
    >
      <AccordionTrigger className="text-xl font-bold">{q}</AccordionTrigger>
      <AccordionContent className="opacity-70">{a}</AccordionContent>
    </AccordionItem>
  );
};

export default Accordion;
