import React from 'react'
import { ourFavoritesData } from '../../OurFavorites.template'
import { Cards } from '../../Components'

export const Tabs = ({ selectedTab }: { selectedTab: number }) => {
  return (
    <>
      {ourFavoritesData.tabs.map((tab, index) => {
        if (selectedTab === index) {
          return <Cards key={`Tab__${tab.title}--${index}`} cards={tab.cards} />
        }
      })}
    </>
  )
}
