import { ArrowRight, Check, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { H1, H3, Small } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLLIElement> & {
  discount: number
  isMonthly: boolean
  featureList: string[]
  fillColor?: boolean
  featureCount: number
  cost: number
  isCreditCardRequire: boolean
  to: string
  type: string
}

export const CardPricingCompact = ({
  isMonthly = false,
  fillColor = false,
  discount,
  featureList,
  featureCount,
  cost,
  isCreditCardRequire,
  to,
  type,
  className,
  ...props
}: Props) => {
  return (
    <li
      className={cn(
        'flex max-w-md flex-col gap-4 rounded-2xl border-[3px] border-primary px-7 py-6 max-lg:w-full lg:flex-1 lg:rounded-xl xl:gap-8 xl:px-12 xl:py-9',
        fillColor && 'bg-primary text-white',
        className
      )}
      {...props}
    >
      <Small className="text-sm font-bold uppercase tracking-widest">{type}</Small>

      <div>
        <H3 as="span">$</H3>
        <H1 as="h3" className="-ml-0.5 inline">
          {isMonthly ? cost : Math.round((cost * 12 * (100 - discount)) / 100)}
        </H1>
        <span className="ml-0.5">/&nbsp;{isMonthly ? 'month' : 'year'}</span>
        <p
          className={cn(
            'mt-1 max-xl:text-sm',
            fillColor ? 'text-muted-foreground-2' : 'text-muted-foreground'
          )}
        >
          billed {isMonthly ? 'monthly' : 'yearly'}
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        {featureList.map((v, index) => (
          <li
            key={index}
            className="flex items-center gap-2 xl:gap-4 [&>svg]:size-8 xl:[&>svg]:size-7"
          >
            {featureCount > index ? (
              <Check className="text-green-400" />
            ) : (
              <X className="opacity-30" />
            )}
            <span className="w-[90%]">{v}</span>
          </li>
        ))}
      </ul>
      <Link to={to}>
        <Button
          variant="primaryTransparent"
          size="xl"
          className={cn(
            'w-full px-5 font-bold',
            fillColor && 'bg-white/10 hover:bg-white/15 active:bg-white/20'
          )}
        >
          Start Free Trial
          <ArrowRight className="w-5" />
        </Button>
      </Link>

      <p className="-mt-2 tracking-tight opacity-70 max-xl:text-sm">
        {isCreditCardRequire ? 'Credit' : 'No credit'} card required
      </p>
    </li>
  )
}
