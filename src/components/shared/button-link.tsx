import { ArrowRight, LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLAnchorElement> & {
  title: string
  icon?: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  to?: string
}

const ButtonLink = ({ title, icon = ArrowRight, to = '', ...props }: Props) => {
  const Icon = icon
  return (
    <Link
      {...props}
      className={cn(
        'flex cursor-pointer items-center justify-between rounded-lg bg-indigo-600/10 px-5 py-3 text-lg font-bold tracking-tight transition-colors duration-100 hover:bg-indigo-600/15 active:bg-indigo-600/20',
        props.className
      )}
      to={to}
    >
      {title}
      <h2>
      </h2>
      <Icon className="w-5" />
    </Link>
  )
}

export default ButtonLink
