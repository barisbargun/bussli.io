import { cn } from '@/lib/utils'

const HoverImageProvider = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'group relative h-fit w-full overflow-hidden rounded-xl [&_*]:transition-all [&_*]:duration-500',
        className
      )}
      {...props}
    />
  )
}

const HoverImageEffect = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('absolute left-0 top-0 z-10 h-full w-full group-hover:bg-black/20', className)}
      {...props}
    />
  )
}

const HoverImageItem = ({
  className,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      alt={alt}
      className={cn('h-full w-full object-cover group-hover:scale-110 lg:rounded-lg', className)}
      loading="lazy"
      {...props}
    />
  )
}

export { HoverImageEffect, HoverImageItem, HoverImageProvider }
