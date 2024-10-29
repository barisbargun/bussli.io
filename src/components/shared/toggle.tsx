import { cn } from '@/lib/utils'

import { Badge } from '../ui/badge'
import { Switch } from '../ui/switch'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  discount: number
  checked: boolean
  setChecked: (v: boolean) => void
}

export const Toggle = ({ checked, setChecked, discount, ...props }: Props) => {
  return (
    <div {...props} className={cn('flex-center gap-4 text-lg', props.className)}>
      <p>Monthly</p>
      <Switch checked={checked} onCheckedChange={setChecked} />
      <p>Yearly</p>
      <Badge >Save {discount}%</Badge>
    </div>
  )
}
