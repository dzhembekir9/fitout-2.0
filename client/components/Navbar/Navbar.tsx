import React, { createContext } from 'react'
import { useWindowSize } from '../../hooks'
import { NavigationContextProvider } from './Navbar.context'
import { DesktopNavbar, MobileNavbar } from './Components'

const NavigationContext = createContext({})

const values = {}

export const Navbar = () => {
  const { width } = useWindowSize()

  return (
    <NavigationContextProvider>
      {width >= 976 ? <DesktopNavbar /> : <MobileNavbar />}
    </NavigationContextProvider>
  )
}
