import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const ButtonGetStarted = ({ children, ...props }: Props) => {
  return (
    <Link className="w-fit" to="/contact">
      <Button className={cn('text-nowrap', props.className)} variant='indigo' size='xl' {...props}>
        {children ?? 'Get Started'}
      </Button>
    </Link>
  )
}
