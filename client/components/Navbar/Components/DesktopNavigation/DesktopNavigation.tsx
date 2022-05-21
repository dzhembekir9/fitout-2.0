import React from 'react'
import css from './DesktopNavigation.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { NavigationProps } from '../../Navbar.props'
import { Items } from './Components'

export const DesktopNavigation = ({ menus }: NavigationProps) => {
  return (
    <div className="flex justify-center py-16 container">
      {menus.map((menu) => {
        return (
          <div
            className={cn('mr-6', {
              [css.ListWrapper]: !menu.isFeatured,
              [css.FeaturedWrapper]: menu.isFeatured,
            })}
            key={`Menu__${menu.title}`}>
            <div className="text-lg font-bold hover:underline cursor-pointer mb-5 tracking-widest">
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
