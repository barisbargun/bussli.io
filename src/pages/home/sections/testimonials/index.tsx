import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui";
import { mainText } from "@/config/pages";
import { Testimonial } from "./components";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Page } from "@/layouts";

const config = mainText.testimonials;
const index = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Page
      className="pageGradient"
      secondClassName="pt-[3.75rem] xl:pt-[5.625rem] items-center"
    >
      <Carousel
        className=""
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent>
          {config.map((v, i) => (
            <Testimonial {...v} key={i} />
          ))}
        </CarouselContent>
        <div className="flex-center absolute -top-[3rem] left-0 gap-3 max-lg:hidden">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
        <div className="absolute -bottom-[4rem] w-full text-center font-poppins text-xs opacity-30 lg:-bottom-[3rem] lg:text-sm">
          Slide {current} of {count}
        </div>
      </Carousel>
    </Page>
  );
};
// pb-10 xl:pb-[3.75rem]
export default index;
