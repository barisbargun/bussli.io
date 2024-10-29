import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

import { cn } from '@/lib/utils'

type Props = HTMLMotionProps<'section'> & {
  spaceType?: 'MainFirstPage' | 'FirstPage' | 'Page'
  nestedClassName?: string
  children?: React.ReactNode
}

const paddingClasses = {
  MainFirstPage: 'pt-[9rem] xl:pt-[11.25rem]',
  FirstPage: 'pb-[6rem] pt-[9rem] xl:pt-[9.375rem]',
  Page: 'pb-[6rem] pt-[3.75rem]'
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
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -250px 0px' }}
      whileInView="show"
      {...props}
    >
      <div
        className={cn(
          'container mx-auto flex flex-col',
          paddingClasses[spaceType],
          nestedClassName
        )}
      >
        {children}
      </div>
    </motion.section>
  )
}
