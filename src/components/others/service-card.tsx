import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

import HoverEffect from '../shared/hover-effect'

type Props = {
  card: any
}

const ServiceCard = ({ card }: Props) => {
  return (
    <div
      key={card.title}
      className={cn(
        'flex flex-1 flex-col items-center rounded-xl px-[1.68rem] pb-[2.38rem] pt-[3.13rem] max-lg:basis-1/3 max-sm:basis-[100%]',
        card.color
      )}
    >
      <img alt="illustration" className="h-32" loading="lazy" src={card.illu} />

      <h3 className="mt-[2.36rem] text-2xl font-bold">{card.title}</h3>
      <p className="mb-[2.69rem] mt-[0.94rem] text-center text-base leading-7 opacity-65">
        {card.desc}
      </p>
      <Link className="flex-center group relative gap-2" to={card.link.url}>
        <p className="font-bold">{card.link.name}</p>
        <ArrowRightIcon className="size-5" />
        <HoverEffect />
      </Link>
    </div>
  )
}

export default ServiceCard
