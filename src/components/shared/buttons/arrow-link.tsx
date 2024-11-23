import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Large } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

import { HoverEffect } from '../hover-effect'

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
  title: string
  to: string
}

export const ArrowLink = ({ title, to, className, ...props }: Props) => {
  return (
    <Link
      className={cn('typo-h4 relative gap-3 text-primary flex-center', className)}
      to={to}
      {...props}
    >
      <Large>{title}</Large>
      <ArrowRight />
      <HoverEffect light={false} />
    </Link>
  )
}
