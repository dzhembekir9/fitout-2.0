import React from 'react'
import { Card } from '../Card'
import { CardsProps } from '../../OurFavorites.props'

export const Cards = ({ cards }: CardsProps) => {
  return (
    <div className="grid grid-cols-3 justify-center gap-6">
      {cards.map((card, index) => {
        return (
          <Card
            key={`Card__${card.title}--${index}`}
            title={card.title}
            label={card.label}
            labelIcon={card.labelIcon}
            image={card.image}
            shopMenHref={card.shopMenHref}
            shopWomenHref={card.shopWomenHref}
          />
        )
      })}
    </div>
  )
}
