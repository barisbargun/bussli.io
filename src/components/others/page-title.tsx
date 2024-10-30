import { HTMLMotionProps, motion } from 'framer-motion'

import motions from '@/lib/motions'
import { cn } from '@/lib/utils'

type Props = HTMLMotionProps<'section'> & {
  nav?: string
  title?: string
  titleType?: 'mainTitle' | 'pageTitle'
  desc?: string
  className?: string
  useMotion?: boolean
}

export const PageTitle = ({
  nav,
  title,
  titleType = 'pageTitle',
  desc,
  className,
  useMotion = true,
  ...props
}: Props) => {
  const HT = titleType == 'mainTitle' ? 'h1' : 'h2'

  return (
    <motion.div
      {...props}
      className={cn(
        'mx-auto flex flex-col text-center max-lg:px-8',
        titleType == 'mainTitle' ? 'max-w-[42rem]' : 'max-w-[35rem]',
        className
      )}
      variants={useMotion ? motions.fadeIn({ direction: 'up' }) : {}}
    >
      {nav && <strong className={cn('pageNavTitle', title && 'mb-[10px] lg:mb-4')}>{nav}</strong>}
      {title && (
        <HT
          className={cn(titleType, nav && desc ? 'mb-[5px] lg:mb-3' : desc && 'mb-[10px] lg:mb-4')}
        >
          {title}
        </HT>
      )}
      {desc && <motion.p className="pageDesc">{desc}</motion.p>}
    </motion.div>
  )
}
