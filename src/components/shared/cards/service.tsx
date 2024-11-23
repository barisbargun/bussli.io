import { ArrowRightIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { CardBody, CardContainer, CardItem } from '@/components/ui/card-3d'
import { H3, P } from '@/components/ui/typography'
import { ServicesConfig } from '@/config/features/services'
import { cn } from '@/lib/utils'

import { HoverEffect } from '../hover-effect'

type Props = ServicesConfig & {
  img: ReactNode
}

export const CardService = ({ title, color, desc, link, img }: Props) => {
  return (
    <CardContainer className={cn('rounded-xl shadow-lg', color)} key={title}>
      <CardBody className="flex size-auto flex-1 flex-col items-center px-6 pb-9 pt-12 text-center">
        <CardItem translateZ="80">{img}</CardItem>

        <CardItem translateZ="60">
          <H3 className="mt-9 max-xl:text-xl">{title}</H3>
          <P className="mb-10 mt-4 text-gray-200">{desc}</P>
        </CardItem>

        <CardItem translateZ="60">
          <Link className="group relative gap-2 flex-center" to={link.url}>
            <p className="font-bold">{link.name}</p>
            <ArrowRightIcon className="size-5" />
            <HoverEffect />
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
