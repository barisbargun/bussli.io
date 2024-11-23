import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

import { cn } from '@/lib/utils'

type Props = HTMLMotionProps<'section'> & {
  spaceType?: 'MainFirstPage' | 'FirstPage' | 'Page'
  nestedClassName?: string
  children?: React.ReactNode
}

export const PageSection = ({
  spaceType = 'Page',
  nestedClassName,
  className,
  children,
  ...props
}: Props) => {
  return (
    <motion.section
      className={cn('relative', className)}
      initial="hidden"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -100px 0px' }}
      whileInView="show"
      {...props}
    >
      <div
        className={cn(
          'container mx-auto flex flex-col',
          spaceType == 'MainFirstPage'
            ? 'page-space-main-first'
            : spaceType == 'FirstPage'
              ? 'page-space-first'
              : 'page-space',
          nestedClassName
        )}
      >
        {children}
      </div>
    </motion.section>
  )
}
