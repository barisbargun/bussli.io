import React from 'react'

import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  spaceType?: 'MainFirstPage' | 'FirstPage' | 'Page'
  nestedClassName?: React.ComponentProps<'div'>['className']
  children?: React.ReactNode
}

const PageSection = ({
  spaceType = 'Page',
  nestedClassName,
  className,
  children,
  ...props
}: Props) => {
  return (
    <section className={className}>
      <div
        className={cn(
          'pageXSpacing mx-auto flex flex-col',
          spaceType === 'MainFirstPage' && 'pt-[9rem] xl:pt-[11.25rem]',
          spaceType === 'FirstPage' && 'pageBottomSpacing pt-[9rem] xl:pt-[9.375rem]',
          spaceType === 'Page' && 'pageBottomSpacing pt-[3.75rem]',
          nestedClassName
        )}
        {...props}
      >
        {children}
      </div>
    </section>
  )
}

export default PageSection
