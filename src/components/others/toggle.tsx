import { cn } from '@/lib/utils'

import { ButtonToggle } from '../shared/button-toggle'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  discount?: number
  isChecked: (v: boolean) => void
}

export const Toggle = ({ isChecked, discount, ...props }: Props) => {
  return (
    <div {...props} className={cn('flex-center gap-4 text-lg', props.className)}>
      <p>Monthly</p>
      <ButtonToggle isChecked={(v) => isChecked(v)} />
      <div className="flex-center gap-3">
        <p>Yearly</p>
        <div className="rounded-full bg-indigo-600/10 px-4 py-1.5 font-poppins text-xs font-bold uppercase tracking-wide text-indigo-600 lg:text-sm">
          Save {discount}%
        </div>
      </div>
    </div>
  )
}
