import React from 'react'
import css from './Card.module.css'
import Image from 'next/image'
import { CardProps } from '../../OurFavorites.props'
import { Button } from '../../../Common'

export const Card = (card: CardProps) => {
  return (
    <div className={css.Wrapper}>
      <Image
        src={card.image.url}
        alt={card.title}
        width={card.image.width}
        height={card.image.height}
      />
      <div className="px-4.5 lg:px-7.5 py-4.5">
        <h3 className="text-3xl font-bold pb-2 mb-3 border-b border-grey">
          {card.title}
        </h3>
        <div className="flex items-center">
          <Image src={card.labelIcon} alt="icon" width={30} height={30} />
          <p className="ml-3">{card.label}</p>
        </div>
        <div className="flex flex-col lg:hidden">
          <Button type="secondary" className="my-2 text-sm" href="#">
            SHOP MEN
          </Button>
          <Button type="secondary" className="text-sm" href="#">
            SHOP WOMEN
          </Button>
        </div>
      </div>
    </div>
  )
}
