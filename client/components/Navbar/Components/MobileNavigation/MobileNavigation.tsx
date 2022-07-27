import React from 'react'
import { useNavigation } from '../../Navbar.context'
import { Menu } from './Components'
import { useVisibleList } from './utils'

export const MobileNavigation = () => {
  const { visibleMenu, setVisibleMenu } = useNavigation()

  const visibleList = useVisibleList()

  return (
    <div className="z-50 absolute w-full bg-white">
      <ul className="flex flex-col">
        {visibleList?.map((menu) => {
          return (
            <Menu
              key={`Menu__${menu.title}`}
              title={menu.title}
              nonBoldText={menu.nonBoldText}
              href={menu.href}
              withSubmenus={Boolean(
                menu?.submenus?.length || menu?.menus?.length
              )}
              menuKey={menu.menuKey}
              setVisibleMenu={setVisibleMenu}
            />
          )
        })}
      </ul>
    </div>
  )
}
