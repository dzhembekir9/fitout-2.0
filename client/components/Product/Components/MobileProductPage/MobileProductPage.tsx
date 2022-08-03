import React from 'react'
import { usePrice } from '../../../../hooks'
import { useProductContext } from '../../Product.context'

export const MobileProductPage = () => {
  const { name, price } = useProductContext()

  const formattedPrice = usePrice({
    centAmount: price.originalPrice.centAmount ?? 0,
    fractionDigits: price.originalPrice.fractionDigits ?? 0,
  })

  return (
    <div>
      <div className="mb-6">
        <p>Home / Womens Shoes / Everyday Sneakers /</p>
        <h1 className="text-4xl font-bold tracking-wider">{name}</h1>
        <p>{formattedPrice}</p>
        <div>★ ★ ★ ★ ★ (502)</div>
      </div>
    </div>
  )
}
