import { HTMLMotionProps, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

type PageHeaderProps = HTMLMotionProps<'section'> & {
  center?: boolean
}

function PageHeader({ className, children, center, ...props }: PageHeaderProps) {
  return (
    <motion.section
      className={cn(
        'flex max-w-3xl flex-col text-balance',
        center && 'mx-auto text-center',
        className
      )}
      {...props}
    >
      {children}
    </motion.section>
  )
}

function PageHeaderNav({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <strong
      className={cn(
        'mb-[10px] text-sm font-semibold uppercase tracking-[1.2px] text-rose-500 lg:mb-4',
        className
      )}
      {...props}
    >
      {children}
    </strong>
  )
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('text-7xl font-bold !leading-[105%] tracking-[-2px] lg:text-6xl', className)}
      {...props}
    />
  )
}

function PageHeaderSubHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('text-4xl font-bold tracking-[-1.2px] lg:text-4xl', className)} {...props} />
  )
}

function PageHeaderDescription({ className, ...props }: HTMLMotionProps<'p'>) {
  return (
    <motion.p
      className={cn('mt-[10px] text-xl leading-[150%] opacity-70 lg:mt-4 lg:text-xl', className)}
      {...props}
    />
  )
}

function PageHeaderActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex w-full items-center justify-start gap-2 py-2', className)}
      {...props}
    />
  )
}

export {
  PageHeader,
  PageHeaderActions,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderNav,
  PageHeaderSubHeading
}
