import React from 'react'

import { HoverImageEffect, HoverImageItem, HoverImageProvider } from '../../ui/hover-image'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  name?: string
  desc?: string
}

export const CardHoverImage = ({ name, desc, ...props }: Props) => {
  const ImageEffect = () => (
    <HoverImageProvider>
      <HoverImageEffect />
      <HoverImageItem {...props} />
    </HoverImageProvider>
  )
  if (!name) return <ImageEffect />
  return (
    <div>
      <ImageEffect />
      <div className="mt-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="opacity-70">{desc}</p>
      </div>
    </div>
  )
}
