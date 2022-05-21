type Keys = 'men' | 'women' | 'new-arrivals'

export type NavigationProps = {
  key?: Keys
  menus: MenuProps[]
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
