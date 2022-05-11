import React, { createContext } from 'react'
import { menuData } from './Navbar.template'
import { NavigationContextProvider } from './Navbar.context'
import { DesktopNavbar, MobileNavbar } from './Components'

const NavigationContext = createContext({})

const values = {}

export const Navbar = () => {
  return (
    <NavigationContextProvider>
      <DesktopNavbar />
      <MobileNavbar />
    </NavigationContextProvider>
  )
}
