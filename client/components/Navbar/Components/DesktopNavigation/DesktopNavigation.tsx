import React from 'react'
import Link from 'next/link'
import { NavigationProps } from '../../Navbar.props'
import { Items } from './Components'

export const DesktopNavigation = ({ menus }: NavigationProps) => {
  return (
    <div className="flex justify-center py-16 container">
      {menus.map((menu) => {
        return (
          <div className="w-1/3" key={`Menu__${menu.title}`}>
            <div className="text-lg font-bold hover:underline cursor-pointer mb-7">
              <Link href={menu.href ?? '#'} passHref>
                <a>{menu.title}</a>
              </Link>
            </div>
            <Items submenus={menu.submenus} />
          </div>
        )
      })}
    </div>
  )
}
