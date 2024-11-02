import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  desc: string
}

export const Quality = ({ desc, title, className, ...props }: Props) => {
  return (
    <div className={cn('flex flex-col items-center gap-4 text-center', className)} {...props}>
      <h3 className="text-5xl font-bold tracking-[-1.8px]">{title}</h3>
      <p className="text-2xl opacity-70 sm:text-lg">{desc}</p>
    </div>
  )
}
