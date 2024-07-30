import { CarouselItem } from "@/components/ui";
import { mainText } from "@/config/pages";
import { StarFilledIcon } from "@radix-ui/react-icons";

type Props = (typeof mainText.testimonials)[0];

const Testimonial = ({ stars, title, user, job, img }: Props) => {
  return (
    <CarouselItem className="flex-center">
      <div className="flex-center max-w-[80%] gap-[2.5rem]">
        <img loading="lazy" src={img} alt="user-img" className="size-[9.3rem] rounded-full" />
        <div className="flex flex-col">
          <div className="flex gap-1">
            {[...Array(stars).keys()].map((_, i) => (
              <StarFilledIcon key={i} className="size-5 text-amber-400" />
            ))}
          </div>
          <h3 className="mt-4 line-clamp-6 font-poppins text-2xl font-bold leading-8 tracking-[-0.0125rem]">
            "{title}"
          </h3>
          <h4 className="mt-4 font-poppins font-bold">{user}</h4>
          <p className="font-poppins text-xs opacity-70">{job}</p>
        </div>
      </div>
    </CarouselItem>
  );
};

export default Testimonial;
