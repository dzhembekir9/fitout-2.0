import React, { useState } from 'react'
import css from './DesktopNavbar.module.css'
import cn from 'classnames'
import { menuData } from '../../Navbar.template'
import { OverflowHidden } from '../../../Common'
import { IconUser, IconHelp, IconCart } from '../../../Common/Icons'
import { useNavigation } from '../../Navbar.context'
import { DesktopNavigation } from '../../Components'

type VisibleMenuProps = 'men' | 'women' | 'new-arrivals' | ''

export const DesktopNavbar = () => {
  const { visibleMenu, setVisibleMenu } = useNavigation()

  const handleSetVisibleMenu = (menu: VisibleMenuProps) => {
    setVisibleMenu(menu)
  }

  console.log(menuData)

  return (
    <>
      {visibleMenu && <OverflowHidden />}
      {visibleMenu && (
        <div
          onClick={() => handleSetVisibleMenu('')}
          className={css.Overlay}></div>
      )}
      <nav className={css.Wrapper}>
        <div>
          <ul className={css.ListWrapper}>
            <li
              className={cn('ml-9', {
                underline: visibleMenu === 'men',
              })}
              onClick={() => handleSetVisibleMenu('men')}>
              MEN
            </li>
            <li
              className={cn('ml-9', {
                underline: visibleMenu === 'women',
              })}
              onClick={() => handleSetVisibleMenu('women')}>
              WOMEN
            </li>
            <li
              className={cn('ml-9', {
                underline: visibleMenu === 'new-arrivals',
              })}
              onClick={() => handleSetVisibleMenu('new-arrivals')}>
              NEW ARRIVALS
            </li>
          </ul>
        </div>
        <div className="text-2xl">Fitout</div>
        <div>
          <ul className={css.ListWrapper}>
            <li className="ml-9">SUSTAINABILITY</li>
            <li className="ml-9">RERUN</li>
            <li className="ml-9">STORES</li>
            <li className="ml-5">
              <IconUser />
            </li>
            <li className="ml-5">
              <IconHelp />
            </li>
            <li className="ml-5 mr-10">
              <IconCart />
            </li>
          </ul>
        </div>
      </nav>
      {visibleMenu && (
        <div className={css.MenuWrapper}>
          {menuData.map((data) => {
            if (data.key === visibleMenu) {
              return <DesktopNavigation menus={data.menus} />
            }
          })}
        </div>
      )}
    </>
  )
}
