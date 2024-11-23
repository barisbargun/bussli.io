import { H4, P } from '@/components/ui/typography'
import { FeaturesConfig } from '@/config/features/features'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & FeaturesConfig

export const CardBasic = ({ title, desc, icon, iconColor, className, ...props }: Props) => {
  return (
    <div className={cn('flex gap-7 max-lg:flex-col', className)} {...props}>
      <div className={cn('box-content h-fit w-8 rounded-2xl p-4 lg:w-20 lg:p-5', iconColor)}>
        <img width={40} height={40} alt="icon" className="size-full" loading="lazy" src={icon} />
      </div>
      <div className="flex flex-col">
        <H4 as="h3">{title}</H4>
        <P className="opacity-70">{desc}</P>
      </div>
    </div>
  )
}
