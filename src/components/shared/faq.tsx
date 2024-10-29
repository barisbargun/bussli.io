import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

import { FaqsConfig } from '@/config/features/faqs'
import { cn } from '@/lib/utils'

import { HoverEffect } from './hover-effect'

type Props = React.HTMLAttributes<HTMLDivElement> & FaqsConfig

export const Faq = ({ a, q, to, className, ...props }: Props) => {
  return (
    <div className={cn('relative flex max-w-[33rem] gap-5 text-white', className)} {...props}>
      <div className="flex-center size-7 rounded-full bg-emerald-400 text-white">?</div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{q}</h3>
        <p className="mb-5 mt-1 text-lg leading-[170%] opacity-70">{a}</p>
        <Link
          className="flex-center relative float-start gap-2 text-lg font-bold tracking-[-0.0375rem] text-emerald-400"
          to={to}
        >
          Click to learn more
          <ArrowRightIcon className="size-5 text-emerald-400" />
          <HoverEffect />
        </Link>
      </div>
    </div>
  )
}
