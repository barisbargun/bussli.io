import { cn } from '@/lib/utils'

import { ButtonGetStarted } from '../shared/buttons/get-started'
import { H3, P } from '../ui/typography'

type Props = React.HTMLAttributes<HTMLDivElement> & {}

export const Cta = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex w-full justify-between gap-4 max-lg:flex-col max-sm:items-center lg:items-center lg:gap-16',
        className
      )}
      {...props}
    >
      <div>
        <H3 as="strong" className="tracking-tighter max-xl:text-xl">
          Ready to launch your next project?
        </H3>
        <P className="text-muted-foreground xl:text-lg">
          Create your next landing page effortlessly with unique, code-free blocks.
        </P>
      </div>
      <ButtonGetStarted />
    </div>
  )
}
