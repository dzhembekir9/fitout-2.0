import React from 'react'
import css from './Navbar.module.css'
import { IconUser, IconHelp, IconCart } from '../Common'

export const Navbar = () => {
  return (
    <div className={css.Wrapper}>
      <div>
        <ul className={css.ListWrapper}>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>NEW ARRIVALS</li>
        </ul>
      </div>
      <div className="text-2xl">Fitout</div>
      <div>
        <ul className={css.ListWrapper}>
          <li>SUSTAINABILITY</li>
          <li>RERUN</li>
          <li>STORES</li>
          <li>
            <IconUser />
          </li>
          <li>
            <IconHelp />
          </li>
          <li>
            <IconCart />
          </li>
        </ul>
      </div>
    </div>
  )
}
