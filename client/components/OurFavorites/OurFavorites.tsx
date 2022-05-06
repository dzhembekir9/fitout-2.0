import React, { useEffect, useState } from 'react'
import css from './OurFavorites.module.css'
import cn from 'classnames'
import { ourFavoritesData } from './OurFavorites.template'
import { Carousel } from '../../components'
import { Tabs, Card } from './Components'
import { CardProps } from './OurFavorites.props'

export const OurFavorites = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [scrollTo, setScrollTo] = useState(0)

  const carouselData: CardProps[] = []

  ourFavoritesData.tabs.forEach((tab) => {
    carouselData.push(...tab.cards)
  })

  useEffect(() => {
    if (selectedTab === 0) {
      setScrollTo(-1)
    } else if (selectedTab === 1) {
      setScrollTo(3)
    } else {
      setScrollTo(6)
    }
  }, [selectedTab])

  return (
    <div className="mx-6 ">
      <h2 className="text-4xl text-center font-bold">Our Favorites</h2>

      <div className="flex justify-center items-center mb-9 border-b-2 border-grey">
        <div className={css.TabsWrapper}>
          {ourFavoritesData.tabs.map((tab, index: number) => {
            return (
              <div className="lg:mx-9" key={`Tab__${tab.title}`}>
                <button
                  onClick={() => setSelectedTab(index)}
                  className={cn(
                    'px-7 pt-7 pb-2 lg:pb-3 whitespace-nowrap opacity-80 hover:opacity-100',
                    {
                      'border-b-2 border-primary': selectedTab === index,
                    }
                  )}>
                  <h4 className="text-lg font-bold tracking-widest">
                    {tab.title}
                  </h4>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className="block lg:hidden">
        <Carousel
          slides={carouselData}
          scrollTo={scrollTo}
          renderSlide={(data, index) => {
            return (
              <Card
                key={`CarouselCard__${index}`}
                image={data.image}
                label={data.label}
                labelIcon={data.labelIcon}
                title={data.title}
              />
            )
          }}
        />
      </div>

      <div className="hidden lg:block">
        <Tabs selectedTab={selectedTab} />
      </div>
    </div>
  )
}
