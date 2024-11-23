import { Link, NavLink } from 'react-router-dom'

import {
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { assets } from '@/config/assets'
import { baseConfig } from '@/config/config'
import { topbarConfig } from '@/config/topbar'
import { cn } from '@/lib/utils'

import { ButtonGetStarted } from '../shared/buttons/get-started'

export const Navbar = () => {
  return (
    <nav className="navSpacing container flex max-w-[1300px] items-center justify-between gap-5 pt-[1.875rem] lg:justify-center">
      <Link to="/">
        <strong className="text-2xl font-bold hover:text-primary-500">
          {baseConfig.logo.name}
        </strong>
      </Link>
      <div className="flex w-full justify-between max-lg:hidden">
        <ul className="relative ml-[5.625rem] flex items-center gap-10">
          {topbarConfig.map((item) => (
            <li key={item.name}>
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'relative text-nowrap text-sm font-semibold hover:text-primary xl:text-base xl:font-bold',
                    isActive &&
                      'after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-primary-500 after:transition-all after:duration-300 after:ease-in-out'
                  )
                }
                to={item.url}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ButtonGetStarted />
      </div>
      <div className="lg:hidden">
        <DropdownMenuComponent>
          <DropdownMenuTrigger>
            <img
              alt="dropdown"
              aria-label="dropdown"
              className="size-6"
              loading="lazy"
              src={assets.svg.icons.alignLeft}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" alignOffset={-100}>
            <DropdownMenuLabel>Bussli.io</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {topbarConfig.map((item) => (
              <DropdownMenuItem asChild key={item.name}>
                <Link className="w-full max-lg:py-1" to={item.url}>
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenuComponent>
      </div>
    </nav>
  )
}
