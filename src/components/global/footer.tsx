import { Link } from 'react-router-dom'

import { baseConfig } from '@/config/config'
import { footerConfig } from '@/config/footer'

import { H3, P, Small } from '../ui/typography'
import { Cta } from './cta'

const MenuLink = ({ items, title }: (typeof footerConfig.links)[0]) => {
  return (
    <div>
      <Small className="text-muted-foreground">{title}</Small>
      <ul className="flex flex-col gap-2 lg:gap-3">
        {items.map((v) => (
          <li key={v.title}>
            <Link
              className="tracking-tight transition-colors duration-100 hover:text-primary-400"
              to={v.to}
            >
              <P className="">{v.title}</P>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-gray-900 py-[3.75rem] text-white lg:py-[5.625rem]">
      <div className="container">
        <Cta />
        <div className="flex content-space-lg max-lg:flex-col-reverse max-lg:gap-24">
          <div className="lg:max-w-80">
            <H3 as="strong">{baseConfig.logo.name}</H3>
            <P className="mb-8 text-muted-foreground">
              Create your next landing page effortlessly with unique, code-free blocks.
            </P>
            <div className="flex items-center gap-7">
              {footerConfig.socialMedia.map((v, index) => (
                <Link key={index} to={v.to}>
                  <v.icon
                    className="group size-7 sm:size-6 lg:size-5"
                    pathClassName="group-hover:fill-primary-400 transition-colors duration-100"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 justify-between gap-12 lg:ml-12 lg:flex">
            {footerConfig.links.map((v) => (
              <MenuLink key={v.title} {...v} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
