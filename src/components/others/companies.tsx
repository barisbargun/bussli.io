import { motion } from 'framer-motion'

import { companiesConfig } from '@/config/companies'
import useWindowSize from '@/hooks/use-window-size'
import { motions } from '@/lib/motions'
import { cn } from '@/lib/utils'

type CompanyProps = {
  icon: string
  title: string
  index: number
}

const CompanyLogos = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const windowSize = useWindowSize()
  return (
    <div
      {...props}
      className={cn(
        'flex-center gap-3 max-lg:flex-col-reverse max-lg:gap-5 lg:flex-col',
        className
      )}
    >
      <motion.p className="text-xs opacity-65" custom={2} variants={motions.fadeIn({})}>
        Join 400+ companies already growing
      </motion.p>
      <div className="flex w-full justify-between gap-y-10 max-lg:flex-wrap sm:gap-x-1 lg:gap-0">
        {companiesConfig.companies.slice(0, windowSize >= 3 ? 4 : 8).map((v, index) => (
          <CompanyLogo key={v.title} index={index} {...v} />
        ))}
      </div>
    </div>
  )
}

const CompanyLogo = ({ icon, title, index }: CompanyProps) => {
  return (
    <motion.div
      className="flex-center gap-1 md:gap-2"
      custom={index}
      variants={motions.fadeIn({
        direction: 'left',
        directionAmount: 100,
        duration: 0.5,
        delay: 0.4
      })}
    >
      <img
        alt="company-logo"
        className="size-[1.87rem] lg:size-9 xl:size-11"
        loading="lazy"
        src={icon}
      />
      <p className="text-xl font-semibold lg:text-lg">{title}</p>
    </motion.div>
  )
}

export { CompanyLogo, CompanyLogos }
