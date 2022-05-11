import React, { useState, createContext, useContext } from 'react'

type NavigationContextProps = {
  visibleMenu: VisibleMenuProps
  setVisibleMenu: React.Dispatch<React.SetStateAction<VisibleMenuProps>>
}

type VisibleMenuProps = 'men' | 'women' | 'new-arrivals' | ''

const NavigationContext = createContext<NavigationContextProps>({
  visibleMenu: '',
  setVisibleMenu: () => {},
})

export const NavigationContextProvider = ({
  children,
}: {
  children: React.ReactNode | string
}) => {
  const [visibleMenu, setVisibleMenu] = useState<VisibleMenuProps>('')

  return (
    <>
      <NavigationContext.Provider value={{ visibleMenu, setVisibleMenu }}>
        {children}
      </NavigationContext.Provider>
    </>
  )
}

export const useNavigation = () => {
  return useContext(NavigationContext)
}
