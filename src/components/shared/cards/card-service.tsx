import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

import { HoverEffect } from '../hover-effect'
import { CardBody, CardContainer, CardItem } from '../../ui/card-3d'

type Props = {
  card: any
}

export const CardService = ({ card }: Props) => {
  return (
    <CardContainer key={card.title} className={cn('rounded-xl shadow-lg', card.color)}>
      <CardBody className="flex size-auto flex-1 flex-col items-center px-[1.68rem] pb-[2.38rem] pt-[3.13rem] text-center max-lg:basis-1/3 max-sm:basis-full">
        <CardItem translateZ="80">
          <img alt="illustration" className="h-32" loading="lazy" src={card.illu} />
        </CardItem>

        <CardItem translateZ="60">
          <h3 className="mt-[2.36rem] text-2xl font-bold">{card.title}</h3>
          <p className="mb-[2.69rem] mt-[0.94rem] text-center text-base leading-7 opacity-75">
            {card.desc}
          </p>
        </CardItem>

        <CardItem translateZ="60">
          <Link className="flex-center group relative gap-2" to={card.link.url}>
            <p className="font-bold">{card.link.name}</p>
            <ArrowRightIcon className="size-5" />
            <HoverEffect />
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
