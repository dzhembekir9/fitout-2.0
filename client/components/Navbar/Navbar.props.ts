export type NavigationProps = {
  key?: string
  menus: MenuProps[]
}

export type MenuProps = {
  title?: string
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
