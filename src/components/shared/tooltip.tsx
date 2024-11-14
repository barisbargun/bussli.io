import { cn } from '@/lib/utils'

import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
  TooltipProvider
} from '../ui/tooltip'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  trigger: any
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export const Tooltip = ({ trigger, children, side = 'bottom',className, ...props }: Props) => {
  return (
    <TooltipProvider delayDuration={200}>
      <HybridTooltip>
        <HybridTooltipTrigger>{trigger}</HybridTooltipTrigger>
        <HybridTooltipContent
          {...props}
          className={cn(
            '!z-50 w-fit max-w-[15rem] break-all rounded-lg border border-gray-200 bg-white px-3 py-2 text-lg text-slate-900 shadow-md lg:text-base',
            className
          )}
          side={side}
        >
          {children}
        </HybridTooltipContent>
      </HybridTooltip>
    </TooltipProvider>
  )
}
