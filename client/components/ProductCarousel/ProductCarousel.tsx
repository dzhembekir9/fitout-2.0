import React from 'react'
import { Carousel } from '..'
import { ProductCarouselProps } from './ProductCarousel.props'
import { Card } from './Components'

type Props = {
  slideWidth?: number
  withBoxShadow?: boolean
} & ProductCarouselProps

export const ProductCarousel = ({
  title,
  cards,
  slideWidth = 396,
  withBoxShadow,
}: Props) => {
  return (
    <div>
      <h2 className="container text-4xl font-bold mb-4.5">{title}</h2>
      <Carousel
        slides={cards}
        slideWidth={slideWidth}
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
              withBoxShadow={withBoxShadow}
            />
          )
        }}
      />
    </div>
  )
}
