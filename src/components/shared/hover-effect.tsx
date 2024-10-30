import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  light?: boolean
}

export const HoverEffect = ({ light = true, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        'absolute -bottom-2 -left-2 -right-2 -top-2 rounded-lg transition-colors duration-300',
        light
          ? 'hover:bg-gray-200/20 active:bg-gray-200/40'
          : 'hover:bg-black/5 active:bg-black/10',
        className
      )}
    />
  )
}
