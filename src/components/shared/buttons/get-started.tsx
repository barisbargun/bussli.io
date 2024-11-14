import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const ButtonGetStarted = ({ children, className, ...props }: Props) => {
  return (
    <Link className="w-fit" to="/contact">
      <Button className={cn('text-nowrap', className)} variant="indigo" size="xl" {...props}>
        {children ?? 'Get Started'}
      </Button>
    </Link>
  )
}
