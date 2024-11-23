import { motion } from 'framer-motion'

import { companiesConfig } from '@/config/companies'
import { motions } from '@/lib/motions'
import { cn } from '@/lib/utils'

import { Large, Small } from '../ui/typography'

const CompanyLogos = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const MotionSmall = motion.create(Small)
  return (
    <div
      {...props}
      className={cn(
        'gap-3 flex-center max-lg:flex-col-reverse max-lg:gap-5 lg:flex-col',
        className
      )}
    >
      <MotionSmall className="text-muted-foreground" custom={2} variants={motions.fadeIn({})}>
        Join 400+ companies already growing
      </MotionSmall>
      <div className="flex w-full justify-between gap-y-6 max-lg:flex-wrap sm:gap-x-6">
        {companiesConfig.companies.slice(0, 4).map((v, index) => (
          <CompanyLogo key={v.title} index={index} {...v} />
        ))}
      </div>
    </div>
  )
}

const CompanyLogo = ({ icon, title, index }: { icon: string; title: string; index: number }) => {
  return (
    <motion.div
      className="gap-1 flex-center max-sm:min-w-[50%]"
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
        className="size-6 sm:size-8 xl:size-11"
        src={icon}
        width={44}
        height={45}
      />
      <Large className="max-xl:text-base max-lg:text-sm">{title}</Large>
    </motion.div>
  )
}

export { CompanyLogo, CompanyLogos }
