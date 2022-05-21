import React from 'react'
import css from './Items.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { MenuProps } from '../../../../Navbar.props'

export const Items = ({ submenus }: MenuProps) => {
  return (
    <ul>
      {submenus.map((submenu) => {
        return (
          <li key={`Submenu__${submenu.label}`}>
            <Link href={submenu.href ?? '#'} passHref>
              <a className="hover:underline text-md">
                <p className="py-1.5 tracking-wider">{submenu.label}</p>
                {submenu.image && (
                  <div className={css.ImageWrapper}>
                    <Image
                      src={submenu.image.src}
                      width={submenu.image.width}
                      height={submenu.image.height}
                      alt={submenu.image.label}
                    />
                    <p className="center text-white font-bold text-lg tracking-widest whitespace-nowrap">
                      {submenu.image.label}
                    </p>
                  </div>
                )}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
