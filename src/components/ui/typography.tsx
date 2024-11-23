import React from 'react'

import { cn } from '@/lib/utils'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'strong' | 'span'
}

const H1 = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ as: Tag = 'h1', className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn('scroll-m-20 text-5xl font-bold tracking-tight xl:text-6xl', className)}
        {...props}
      />
    )
  }
)

const H2 = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ as: Tag = 'h2', className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn('scroll-m-20 text-3xl font-bold tracking-tight xl:text-4xl', className)}
        {...props}
      />
    )
  }
)

const H3 = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ as: Tag = 'h3', className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn('scroll-m-20 text-2xl font-bold tracking-tight', className)}
        {...props}
      />
    )
  }
)

const H4 = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ as: Tag = 'h4', className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
        {...props}
      />
    )
  }
)

const Large = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn('text-lg font-semibold', className)} {...props} />
  }
)

const P = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('leading-7 [&:not(:first-child)]:mt-2', className)} {...props} />
    )
  }
)

const Small = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return <small ref={ref} className={cn('text-sm font-medium', className)} {...props} />
  }
)

const Ul = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => {
    return <ul ref={ref} className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props} />
  }
)

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'
H4.displayName = 'H4'
P.displayName = 'P'
Large.displayName = 'Large'
Small.displayName = 'Small'
Ul.displayName = 'Ul'

export { H1, H2, H3, H4, Large, P, Small, Ul }
