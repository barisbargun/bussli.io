import { HTMLMotionProps, motion } from 'framer-motion'
import React from 'react'

import { cn } from '@/lib/utils'

type Props = HTMLMotionProps<'section'> & {
  children?: React.ReactNode
  className?: string
  secondClassName?: string
  page?: 'MainFirstPage' | 'FirstPage' | 'Page'
}

const staggerContainer = (staggerChildren?: any, delayChildren?: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0
      }
    }
  }
}

const MotionLayout = ({ children, className, secondClassName, page = 'Page', ...props }: Props) => {
  return (
    <motion.section
      {...props}
      className={cn('flex w-full justify-center', className)}
      initial="initial"
      variants={staggerContainer()}
      viewport={{ once: true, margin: '0px 0px -250px 0px' }}
      whileInView="animate"
    >
      <div
        className={cn(
          'relative flex w-full flex-col [&>article]:overflow-hidden',
          // page == 'MainFirstPage'
          //   ? 'mainFirstPageSpacing'
          //   : (page == 'FirstPage'
          //     ? 'firstPageSpacing'
          //     : 'pageSpacing'),
          // secondClassName
        )}
      >
        {children}
      </div>
    </motion.section>
  )
}

export default MotionLayout
