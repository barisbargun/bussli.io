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
      <CarouselContent>
        {children}
        {/* {config.map((v, i) => (
            <Testimonial {...v} key={i} />
          ))} */}
      </CarouselContent>
      <div className="flex-center absolute -top-12 left-0 gap-3 max-lg:hidden">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
      <div className="absolute -bottom-16 w-full text-center font-poppins text-xs opacity-30 lg:-bottom-12 lg:text-sm">
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
  return (
    <CarouselItem className="flex-center">
      <div className="flex-center max-w-[80%] gap-10">
        <img alt="user-img" className="size-[9.3rem] rounded-full" loading="lazy" src={img} />
        <div className="flex flex-col">
          <div className="flex gap-1">
            {[...Array.from({ length: stars }).keys()].map((_, index) => (
              <StarFilledIcon key={index} className="size-5 text-amber-400" />
            ))}
          </div>
          <h3 className="mt-4 line-clamp-6 font-poppins text-2xl font-bold leading-8 tracking-[-0.0125rem]">
            &quot;{title}&quot;
          </h3>
          <h4 className="mt-4 font-poppins font-bold">{user}</h4>
          <p className="font-poppins text-xs opacity-70">{job}</p>
        </div>
      </div>
    </CarouselItem>
  )
}

export { Testimonial, TestimonialProvider }
