import React from 'react'
import css from './DesktopNavbar.module.css'
import { IconUser, IconHelp, IconCart } from '../../../Common/Icons'

export const DesktopNavbar = () => {
  return (
    <nav className={css.Wrapper}>
      <div>
        <ul className={css.ListWrapper}>
          <li className="ml-9">MEN</li>
          <li className="ml-9">WOMEN</li>
          <li className="ml-9">NEW ARRIVALS</li>
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
  )
}
