import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const ButtonGetStarted = ({ children, ...props }: Props) => {
  return (
    <Link className="w-fit" to="/contact">
      <button {...props} className={cn('indigoButton text-nowrap', props.className)}>
        {children ?? 'Get Started'}
      </button>
    </Link>
  )
}
