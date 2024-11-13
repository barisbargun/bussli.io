import React from 'react'

import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  nav: string
  title: string
  img: string
  size?: 'base' | 'long'
}

export const Product = ({ nav, title, img, size = 'base', ...props }: Props) => {
  return (
    <div {...props}>
      {/* WIP: Remove div */}
      <img
        alt="product-img"
        className={cn(
          'w-full rounded-lg object-cover',
          size == 'long'
            ? 'h-[13.5rem] sm:h-[20rem] lg:h-[33.75rem]'
            : 'h-[8.5rem] sm:h-[12.6rem] lg:h-[21.3rem]'
        )}
        loading="lazy"
        src={img}
        width={530}
        height={size == 'long' ? 540 : 340}
      />
      <div className="mt-8 flex flex-col pl-0 lg:pl-2">
        <p className="text-sm opacity-70">{nav}</p>
        <h3 className="mt-1 text-2xl font-bold">{title}</h3>
      </div>
    </div>
  )
}
