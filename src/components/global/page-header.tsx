import { HTMLMotionProps, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

import { H1, H2, P } from '../ui/typography'

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
        'mb-2.5 text-sm font-semibold uppercase tracking-widest text-rose-500 lg:mb-4',
        className
      )}
      {...props}
    >
      {children}
    </strong>
  )
}

function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <H1 className={cn('sm:max-lg:text-7xl', className)} {...props} />
}

function PageHeaderSubHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <H2 className={className} {...props} />
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <P className={cn('text-muted-foreground sm:max-lg:text-lg', className)} {...props} />
}

export { PageHeader, PageHeaderDescription, PageHeaderHeading, PageHeaderNav, PageHeaderSubHeading }
