import React from 'react'
import css from './Card.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { CardProps } from '../../ProductCarousel.props'

type Props = {
  withBoxShadow?: boolean
} & CardProps

export const Card = ({ title, content, image, href, withBoxShadow }: Props) => {
  return (
    <Link href={href} passHref>
      <a
        className={cn(css.Wrapper, {
          [css.Shadow]: withBoxShadow,
        })}>
        <div className="bg-lightGrey">
          <Image
            src={image.src}
            alt={title}
            width={image.width}
            height={image.height}
          />
        </div>
        <div className="p-4.5">
          <h3 className="text-2xl font-bold mb-1.5">{title}</h3>
          <p className="text-lg">{content}</p>
        </div>
      </a>
    </Link>
  )
}
