import { VisibleMenuProps } from './Navbar.context'

export type NavigationProps = {
  menuKey?: VisibleMenuProps
  title?: string
  href?: string
  onlyOnMobile?: boolean
  nonBoldText?: boolean
  menus?: MenuProps[]
}

export type MenuProps = {
  title?: string
  isFeatured?: boolean
  href?: string
  submenus: SubMenuProps[]
}

export type SubMenuProps = {
  label?: string
  href?: string
  image?: {
    label: string
    src: string
    href: string
    width: number
    height: number
  }
}

export type DesktopNavigationProps = {
  title: string
  href?: string
  isLeft?: boolean
}

export type MobileNavigationProps = {
  title?: string
  href?: string
  nonBold?: boolean
}
