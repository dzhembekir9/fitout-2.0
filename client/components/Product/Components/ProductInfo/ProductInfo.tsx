import React from 'react'
import { usePrice } from '../../../../hooks'
import { Button } from '../../../Common'
import { useProductContext } from '../../Product.context'

export const ProductInfo = () => {
  const {
    name,
    getProductVariants,
    selectVariantById,
    selectedVariant,
    price,
  } = useProductContext()

  const variants = getProductVariants()

  const formattedPrice = usePrice({
    centAmount: price.originalPrice.centAmount ?? 0,
    fractionDigits: price.originalPrice.fractionDigits ?? 0,
  })

  return (
    <div className="pl-9 w-1/3">
      <div className="mb-6">
        <p>Home / Womens Shoes / Everyday Sneakers /</p>
        <h1 className="text-4xl font-bold tracking-wider">{name}</h1>
        <p>{formattedPrice}</p>
        <div>★ ★ ★ ★ ★ (502)</div>
      </div>
      <div>
        <span>Colors:</span>
        <span>{selectedVariant?.attributes?.color}</span>
        {variants?.map((variant) => {
          return (
            <div
              key={`Colors__${variant.id}`}
              onClick={() => selectVariantById(variant.id)}>
              {variant.attributes.color}
            </div>
          )
        })}
        <div className="mt-5 mb-4">
          <div className="mb-3">Select size:</div>
          <div className="flex flex-wrap gap-2">
            {selectedVariant?.attributes?.sizes.map((size: number) => {
              return (
                <div
                  key={`Sizes__${selectedVariant}--${size}`}
                  className="py-4 px-6 border inline-flex cursor-pointer hover:bg-grey transition">
                  {size}
                </div>
              )
            })}
          </div>
        </div>
        <p className="mb-5 text-sm">
          This style is available in whole sizes only. In between sizes? We
          recommend you size down.See Size Chart
        </p>
        <Button type="secondary" width="100%">
          ADD TO CART - $105
        </Button>
        <span className="block text-center mt-3 text-sm">
          Free shipping on orders over $50. Free returns.
        </span>
      </div>
    </div>
  )
}
