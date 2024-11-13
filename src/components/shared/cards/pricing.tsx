import index from '@/app'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { PricingPackagesConfig } from '@/config/features/pricing/packages'
import { cn } from '@/lib/utils'

import { ButtonGetStarted } from '../buttons/get-started'

type Props = React.HTMLAttributes<HTMLDivElement> & PricingPackagesConfig

export const CardPricing = ({ type, price, isMonthly, desc, className, ...props }: Props) => {
  return (
    // <div
    //   className={cn(
    //     'flex flex-col items-center rounded-lg bg-white px-7 pb-5 pt-9 text-center max-sm:py-10',
    //     className
    //   )}
    //   {...props}
    // >
    //   <p className="w-fit rounded-xl bg-indigo-600/10 px-[0.62rem] py-[0.37rem] font-bold uppercase tracking-[0.1rem] text-indigo-600">
    //     {type}
    //   </p>
    //   <h3 className="mb-[0.3rem] mt-[1.8rem] text-5xl font-bold tracking-[-1.8px]">${price}</h3>
    //   <p className="text-base opacity-70">billed {isMonthly ? 'monthly' : 'yearly'}</p>
    //   <p className="mb-14 mt-10 text-xl max-sm:leading-[150%] sm:text-lg">{desc}</p>
    //   <ButtonGetStarted className="mt-auto box-content px-5">Get started for free</ButtonGetStarted>
    // </div>
    <Card className={cn("flex flex-col items-center text-center max-w-sm", className)}>
      <CardHeader className="flex flex-col items-center">
        <strong className="w-fit rounded-xl bg-indigo-600/10 px-[0.62rem] py-[0.37rem] uppercase tracking-[0.1rem] text-indigo-600">
          {type}
        </strong>
        <CardTitle className='text-5xl font-bold !mt-7'>${price}</CardTitle>
        <CardDescription>billed {isMonthly ? 'monthly' : 'yearly'}</CardDescription>
      </CardHeader>
      <CardContent className='text-lg'>{desc}</CardContent>
      <CardFooter className='mt-5'>
        <ButtonGetStarted className="mx-auto box-content px-5">
          Get started for free
        </ButtonGetStarted>
      </CardFooter>
    </Card>
  )
}
