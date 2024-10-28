import { motion } from 'framer-motion'

import { companiesConfig } from '@/config/companies'
import useWindowSize from '@/hooks/use-window-size'
import effects from '@/lib/motions'
import { cn } from '@/lib/utils'

// const staggerVariants: Variants = {
//   initial: { opacity: 0, x: -100 },
//   animate: (index_) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: 'spring',
//       delay: index_ * 0.5,
//       duration: 0.75,
//       ease: 'easeOut'
//     }
//   })
// }

const config = companiesConfig
const Companies = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const windowSize = useWindowSize()
  return (
    <div
      {...props}
      className={cn(
        'flex-center gap-3 max-lg:flex-col-reverse max-lg:gap-5 lg:flex-col',
        className
      )}
    >
      <motion.p className="text-xs opacity-65" custom={2} variants={effects.fadeIn({})}>
        {config.title}
      </motion.p>
      <div className="flex w-full justify-between gap-y-10 max-lg:flex-wrap sm:gap-x-1 lg:gap-0">
        {config.companies.slice(0, windowSize >= 3 ? 4 : 8).map((v, index_) => (
          <motion.div
            key={index_}
            custom={index_}
            variants={effects.fadeIn({
              direction: 'left',
              duration: 0.5,
              directionAmount: 100,
              delay: 0.4
            })}
          >
            <Company {...v} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Company = ({ icon, title }: (typeof config.companies)[0]) => {
  return (
    <div className="flex-center gap-1 md:gap-2">
      <img
        alt="company-logo"
        className="size-[1.87rem] lg:size-9 xl:size-11"
        loading="lazy"
        src={icon}
      />
      <p className="text-xl font-semibold lg:text-lg">{title}</p>
    </div>
  )
}

export default Companies
