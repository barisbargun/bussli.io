import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  q: string
  a: string
  index: number
}

export const AccordionFaq = ({ q, a, index, className, ...props }: Props) => {
  return (
    <AccordionItem
      {...props}
      className={cn('rounded-xl border border-gray-200 px-6 py-2', className)}
      value={index + ''}
    >
      <AccordionTrigger className="text-xl font-bold">{q}</AccordionTrigger>
      <AccordionContent className="opacity-70">{a}</AccordionContent>
    </AccordionItem>
  )
}
