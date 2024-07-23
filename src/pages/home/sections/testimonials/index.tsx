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
      page="Page"
      className="pageGradient"
      secondClassName="pt-[3.75rem] xl:pt-[5.625rem] items-center"
    >
      <Carousel plugins={[Autoplay({ delay: 200000 })]} setApi={setApi}>
        <CarouselContent className="pl-[12.5%]">
          {config.map((v, i) => (
            <Testimonial {...v} key={i} />
          ))}
        </CarouselContent>
        <div className="flex-center absolute -top-[3rem] left-0 gap-3">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
        <div className=" absolute -bottom-[3rem] w-full text-center font-poppins text-xs lg:text-sm opacity-30">
          Slide {current} of {count}
        </div>
      </Carousel>
    </Page>
  );
};
// pb-10 xl:pb-[3.75rem]
export default index;
