import React from 'react'
import cn from 'classnames'
import css from './ProductSizes.module.css'
import { Size } from '../../../../types/Product'
import { DiagonalLine } from '../../../Common/Icons'

export const ProductSizes = ({ size, available }: Size) => {
  if (available) {
    return <div className={css.SizeBox}>{size}</div>
  }

  return (
    <div className={cn(css.SizeBox, 'relative')}>
      <span className="center">{size}</span>
      <DiagonalLine />
    </div>
  )
}
