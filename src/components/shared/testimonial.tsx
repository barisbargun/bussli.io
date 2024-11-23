import { StarFilledIcon } from '@radix-ui/react-icons'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

import { H3 } from '../ui/typography'

const TestimonialProvider = ({ children }: { children: React.ReactNode }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel
      className=""
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true
        })
      ]}
      setApi={setApi}
    >
      <CarouselContent>{children}</CarouselContent>
      <div className="absolute -top-12 left-0 gap-3 flex-center max-lg:hidden">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
      <div className="absolute -bottom-12 w-full text-center font-poppins text-sm opacity-30 max-lg:hidden">
        Slide {current} of {count}
      </div>
    </Carousel>
  )
}

const Testimonial = ({
  stars,
  title,
  user,
  job,
  img
}: {
  stars: number
  title: string
  user: string
  job: string
  img: string
}) => {
  const Image = ({ size = 'base' }: { size?: 'base' | 'sm' }) => (
    <img
      width={150}
      height={150}
      alt="user-img"
      className={cn('rounded-full', size === 'sm' ? 'size-12 lg:hidden' : 'size-36 max-lg:hidden')}
      loading="lazy"
      src={img}
    />
  )

  return (
    <CarouselItem className="flex-center">
      <div className="max-w-[80%] gap-10 flex-center">
        <Image />
        <div className="flex flex-col">
          <div className="flex gap-1">
            {[...Array.from({ length: stars }).keys()].map((_, index) => (
              <StarFilledIcon key={index} className="size-5 text-amber-400" />
            ))}
          </div>
          <H3 className="mt-4 line-clamp-6 font-poppins tracking-[-0.0125rem] max-xl:text-xl">
            &quot;{title}&quot;
          </H3>
          <div className="mt-4 flex items-center gap-4">
            <Image size="sm" />
            <div className="inline">
              <h4 className="font-poppins font-bold">{user}</h4>
              <p className="font-poppins text-xs opacity-70">{job}</p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  )
}

export { Testimonial, TestimonialProvider }
