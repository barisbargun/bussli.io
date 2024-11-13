import { ArrowRightIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d'
import { ServicesConfig } from '@/config/features/services'
import { cn } from '@/lib/utils'

import { HoverEffect } from '../hover-effect'

type Props = ServicesConfig & {
  img: ReactNode;
}

export const CardService = ({ title, color, desc, link, img }: Props) => {
  return (
    <CardContainer className={cn('rounded-xl shadow-lg', color)} key={title}>
      <CardBody className="flex size-auto flex-1 flex-col items-center px-[1.68rem] pb-9 pt-12 text-center max-lg:basis-1/3 max-sm:basis-full">
        <CardItem translateZ="80">
          {img}
        </CardItem>

        <CardItem translateZ="60">
          <h3 className="mt-9 text-2xl font-bold">{title}</h3>
          <p className="mb-10 mt-4 text-center text-base leading-7 opacity-75">{desc}</p>
        </CardItem>

        <CardItem translateZ="60">
          <Link className="flex-center group relative gap-2" to={link.url}>
            <p className="font-bold">{link.name}</p>
            <ArrowRightIcon className="size-5" />
            <HoverEffect />
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
