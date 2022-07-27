import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { VisibleMenuProps } from '../../../../Navbar.context'
import { NavigationProps } from '../../../../Navbar.props'
import { IconChevronRight } from '../../../../../Common/Icons'

type MenuProps = {
  setVisibleMenu: React.Dispatch<React.SetStateAction<VisibleMenuProps>>
  withSubmenus?: boolean
} & NavigationProps

export const Menu = ({
  title,
  href,
  nonBoldText,
  setVisibleMenu,
  menuKey,
  withSubmenus,
}: MenuProps) => {
  return (
    <li className="w-full border-b border-grey">
      {withSubmenus ? (
        <button
          onClick={() => setVisibleMenu(menuKey ?? '')}
          className="flex justify-between items-center w-full px-9 py-5">
          <p className="text-sm font-bold tracking-widest">{title}</p>
          <span>
            <IconChevronRight />
          </span>
        </button>
      ) : (
        <Link href={href ?? '#'} passHref>
          <a
            className={cn('text-md tracking-widest w-full px-9 py-5 block', {
              'font-bold text-sm': !nonBoldText,
            })}>
            {title}
          </a>
        </Link>
      )}
    </li>
  )
}
