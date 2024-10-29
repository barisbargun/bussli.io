import { cn } from '@/lib/utils'

import { HoverImageEffect, HoverImageItem, HoverImageProvider } from '../hover-image'

type Props = {
  img: string
  alt: string
  aspect?: 'sm' | 'md' | 'lg'
  name?: string
  role?: string
}

export const CardHoverImage = ({ img, alt, aspect = 'md', name, role }: Props) => {
  const ImageEffect = () => (
    <HoverImageProvider>
      <HoverImageEffect />
      <HoverImageItem
        alt={alt}
        className={cn(aspect == 'lg' && 'aspect-[16/22]', aspect == 'sm' && 'aspect-[1/1]')}
        src={img}
      />
    </HoverImageProvider>
  )
  if (!name) return <ImageEffect />
  return (
    <div>
      <ImageEffect />
      <div className="mt-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="opacity-70">{role}</p>
      </div>
    </div>
  )
}
