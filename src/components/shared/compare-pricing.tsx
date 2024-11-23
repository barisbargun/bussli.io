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

const titleColors = ['text-emerald-600', 'text-red-600', 'text-primary']
export const ComparePricing = ({
  f,
  tip,
  b,
  s,
  p,
  isTitle = false,
  className,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={cn('flex max-lg:w-[120vw] max-sm:w-[160vw]', isTitle && 'sm:mb-3', className)}
    >
      <div className="flex flex-[0_0_35%] items-center gap-1.5 sm:flex-[0_0_30%] lg:flex-[0_0_48%] xl:flex-[0_0_52%]">
        <p
          className={cn(
            'capitalize',
            isTitle ? 'font-bold sm:text-xl' : 'font-medium max-sm:text-sm'
          )}
        >
          {f}
        </p>
        {!isTitle && (
          <Tooltip trigger={<CircleHelp className="size-4 cursor-default opacity-20 sm:size-7" />}>
            {tip}
          </Tooltip>
        )}
      </div>
      <div className="grid flex-auto grid-cols-3 gap-8 lg:gap-20">
        {[b, s, p].map((v, index) => (
          <div key={index} className="text-center flex-center">
            {isTitle ? (
              <h3 className={cn('font-semibold capitalize sm:text-xl', titleColors[index])}>{v}</h3>
            ) : (
              <div className="font-medium [&_svg]:size-5 sm:[&_svg]:size-6">
                {typeof v === 'boolean' ? (
                  v === true ? (
                    <CircleCheck className="text-primary" />
                  ) : (
                    <CircleMinus className="text-gray-400" />
                  )
                ) : (
                  <p className="max-sm:text-sm">{v}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
