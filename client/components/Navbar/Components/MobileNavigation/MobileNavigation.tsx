import React from 'react'
import { useNavigation } from '../../Navbar.context'
import { menuData } from '../../Navbar.template'
import { Menu } from './Components'

export const MobileNavigation = () => {
  const { visibleMenu, setVisibleMenu } = useNavigation()

  const visibleList = () => {
    if (visibleMenu === 'men') return menuData[0].menus
    else if (visibleMenu === 'women') return menuData[1].menus
    else if (visibleMenu === 'new-arrivals') return menuData[2].menus
    else if (visibleMenu === 'sustainability') return menuData[3].menus
    else return menuData
  }

  return (
    <div className="z-50 absolute w-full bg-white">
      <ul className="flex flex-col">
        {visibleList()?.map((menu) => {
          return (
            <Menu
              key={`Menu__${menu.title}`}
              title={menu.title}
              nonBoldText={menu.nonBoldText}
              href={menu.href}
              menuKey={menu.menuKey}
              setVisibleMenu={setVisibleMenu}
            />
          )
        })}
      </ul>
    </div>
  )
}
