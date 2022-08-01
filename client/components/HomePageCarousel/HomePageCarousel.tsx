import React from 'react'
import { Carousel } from '../../components'
import { HomePageCarouselProps } from './HomePageCarousel.props'
import { Card } from './Components'

export const HomePageCarousel = ({ title, cards }: HomePageCarouselProps) => {
  return (
    <div>
      <h2 className="container text-4xl font-bold mb-4.5">{title}</h2>
      <Carousel
        slides={cards}
        slideWidth={396}
        overflow="visible"
        withButtons
        dragFree
        renderSlide={(card) => {
          return (
            <Card
              key={`Card__${card.title}`}
              title={card.title}
              content={card.content}
              image={card.image}
              href={card.href}
            />
          )
        }}
      />
    </div>
  )
}
