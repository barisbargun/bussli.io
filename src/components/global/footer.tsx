import { Link } from 'react-router-dom'

import { baseConfig } from '@/config'
import { footerConfig } from '@/config/footer'

import Cta from './cta'

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-gray-900 py-[3.75rem] text-white lg:py-[5.625rem]">
      <div className="pageXSpacing">
        <Cta />
        <div className="relatedContentSpacing flex max-lg:flex-col-reverse max-lg:gap-24">
          <div className="lg:max-w-80">
            <h3 className="text-3xl font-bold tracking-tight">{baseConfig.logo.name}</h3>
            <p className="mb-12 mt-8 font-light leading-7 opacity-70">{footerConfig.desc}</p>
            <div className="flex items-center gap-7">
              {footerConfig.socialMedia.map((v, index) => (
                <Link key={index} to={v.to}>
                  <v.icon
                    className="group size-7 sm:size-6 lg:size-5"
                    pathClassName="group-hover:fill-indigo-400 transition-colors duration-100"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 justify-between gap-x-10 gap-y-20 sm:flex sm:gap-12 lg:ml-12">
            {footerConfig.links.map((v) => (
              <MenuLink key={v.title} {...v} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const MenuLink = ({ items, title }: (typeof footerConfig.links)[0]) => {
  return (
    <div>
      <h3 className="mb-8 font-light opacity-70 max-sm:text-[1.4rem] sm:mb-4">{title}</h3>
      <ul className="flex flex-col gap-8 sm:gap-3">
        {items.map((v) => (
          <li key={v.title}>
            <Link
              className="text-[1.6rem] tracking-tight transition-colors duration-100 hover:text-indigo-400 sm:text-lg"
              to={v.to}
            >
              {v.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
