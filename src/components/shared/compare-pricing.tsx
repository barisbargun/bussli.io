import { CircleCheck, CircleHelp, CircleMinus } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Tooltip } from './tooltip'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  f: string
  tip: string
  b: string | boolean
  s: string | boolean
  p: string | boolean
  isTitle?: boolean
}

const titleColors = ['text-emerald-600', 'text-red-600', 'text-indigo-600']
export const ComparePricing = ({ f, tip, b, s, p, isTitle = false, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn('flex max-sm:w-[120vw]', isTitle && 'mb-5 lg:mb-3', props.className)}
    >
      <div className="flex flex-[0_0_48%] items-center gap-1.5 xl:flex-[0_0_52%]">
        <p className={cn('capitalize', isTitle ? 'text-xl font-bold' : 'font-medium')}>{f}</p>
        {!isTitle && (
          <Tooltip trigger={<CircleHelp className="size-8 cursor-default opacity-20 lg:size-7" />}>
            {tip}
          </Tooltip>
        )}
      </div>
      <div className="grid flex-auto grid-cols-3 gap-8 lg:gap-20">
        {[b, s, p].map((v, index) => (
          <div key={index} className="flex-center text-center">
            {isTitle ? (
              <h3 className={cn('text-xl font-semibold capitalize', titleColors[index])}>{v}</h3>
            ) : (
              <div className="font-medium [&_svg]:size-6">
                {typeof v === 'boolean' ? (
                  v === true ? (
                    <CircleCheck className="text-indigo-600" />
                  ) : (
                    <CircleMinus className="text-gray-400" />
                  )
                ) : (
                  <p>{v}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
