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
    <Card
      className={cn('flex max-w-md flex-col items-center text-center lg:max-w-sm', className)}
      {...props}
    >
      <CardHeader className="flex flex-col items-center">
        <strong className="w-fit rounded-xl bg-primary/10 px-2 py-1.5 uppercase tracking-wider text-primary max-xl:text-sm">
          {type}
        </strong>
        <CardTitle className="!mt-7 text-5xl font-bold max-xl:lg:text-4xl">${price}</CardTitle>
        <CardDescription>billed {isMonthly ? 'monthly' : 'yearly'}</CardDescription>
      </CardHeader>
      <CardContent className="xl:text-lg">{desc}</CardContent>
      <CardFooter className="mt-5">
        <ButtonGetStarted className="mx-auto box-content px-5">
          Get started for free
        </ButtonGetStarted>
      </CardFooter>
    </Card>
  )
}
