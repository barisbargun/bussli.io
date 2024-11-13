import { ArrowRight, Check, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
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
  ...props
}: Props) => {
  return (
    <li
      {...props}
      className={cn(
        'flex flex-col gap-8 rounded-2xl border-[3px] border-indigo-600 px-10 py-7 max-lg:max-w-[30rem] max-lg:basis-full lg:flex-1 lg:gap-6 lg:rounded-xl xl:px-12 xl:py-9',
        fillColor && 'bg-indigo-600 text-white',
        props.className
      )}
    >
      <h3 className="text-sm font-bold uppercase tracking-widest">{type}</h3>

      <div className="">
        <span className="text-2xl font-bold">$</span>
        <h3 className="-ml-0.5 inline text-7xl font-bold tracking-tighter lg:text-6xl">
          {isMonthly ? cost : Math.round((cost * 12 * (100 - discount)) / 100)}
        </h3>
        <span className="font-lg ml-0.5">/&nbsp;{isMonthly ? 'month' : 'year'}</span>
        <p className="mt-2 opacity-70 max-lg:text-xs xl:mt-1">
          billed {isMonthly ? 'monthly' : 'yearly'}
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        {featureList.map((v, index) => (
          <li
            key={index}
            className={
              (cn(featureCount <= index && 'opacity-70'),
              'flex items-center gap-4 [&>svg]:size-8 xl:[&>svg]:size-7')
            }
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
          variant="indigoTransparent"
          size="xl"
          className={cn(
            'px-5 font-bold w-full',
            fillColor && 'bg-white/10 hover:bg-white/15 active:bg-white/20'
          )}
        >
          Start Free Trial
          <ArrowRight className="w-5" />
        </Button>
      </Link>

      <p className="-mt-2 tracking-tight opacity-70 max-lg:text-xs">
        {isCreditCardRequire ? 'Credit' : 'No credit'} card required
      </p>
    </li>
  )
}
