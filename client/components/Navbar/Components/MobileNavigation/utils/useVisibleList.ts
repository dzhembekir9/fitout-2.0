import { useNavigation } from '../../../Navbar.context'
import { menuData } from '../../../Navbar.template'

export const useVisibleList = () => {
  const { visibleMenu } = useNavigation()

  if (visibleMenu === 'men') return menuData[0].menus
  else if (visibleMenu === 'women') return menuData[1].menus
  else if (visibleMenu === 'new-arrivals') return menuData[2].menus
  else if (visibleMenu === 'sustainability') return menuData[3].menus
  else if (visibleMenu === 'shoes') return menuData[0].menus[0].submenus
  else return menuData
}
