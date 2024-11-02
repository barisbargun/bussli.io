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
import useWindowSize from '@/hooks/use-window-size'
import { cn } from '@/lib/utils'

import { ButtonGetStarted } from '../shared/buttons/get-started'

export const Navbar = () => {
  const windowSize = useWindowSize()

  return (
    <nav className="navSpacing container flex max-w-[1300px] items-center justify-between gap-5 pt-[1.875rem] lg:justify-center">
      <Link to="/">
        <strong className="logoTitle hover:text-indigo-500">{baseConfig.logo.name}</strong>
      </Link>
      {windowSize >= 3 ? (
        <>
          <ul className="relative ml-[5.625rem] flex items-center gap-10">
            {topbarConfig.map((item) => (
              <li key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      'relative text-nowrap font-semibold hover:text-indigo-600 max-xl:text-sm xl:font-bold',
                      isActive &&
                        'after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:transition-all after:duration-300 after:ease-in-out'
                    )
                  }
                  to={item.url}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="flex-grow"></span>
          <div className="float-right"></div>
          <ButtonGetStarted />
        </>
      ) : (
        <div>
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
                <DropdownMenuItem key={item.name} asChild>
                  <Link className="w-full max-lg:py-1" to={item.url}>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenuComponent>
        </div>
      )}
    </nav>
  )
}
