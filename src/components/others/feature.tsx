import { FeaturesConfig } from '@/config/features/features'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & FeaturesConfig

export const Feature = ({ title, desc, icon, iconColor, className, ...props }: Props) => {
  return (
    <div className={cn('flex gap-7 max-lg:flex-col', className)} {...props}>
      <div className={cn('box-content h-fit w-8 rounded-2xl p-4 lg:w-20 lg:p-5', iconColor)}>
        <img alt="icon" className="size-full" loading="lazy" src={icon} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold tracking-[-0.5px] lg:text-xl">{title}</h3>
        <p className="text-xl leading-7 opacity-70 lg:text-lg">{desc}</p>
      </div>
    </div>
  )
}
