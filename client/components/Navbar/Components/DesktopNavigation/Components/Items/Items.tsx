import React from 'react'
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
                <p>{submenu.label}</p>
                {submenu.image && (
                  <Image
                    src={submenu.image.src}
                    width={submenu.image.width}
                    height={submenu.image.height}
                    alt={submenu.image.label}
                  />
                )}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
