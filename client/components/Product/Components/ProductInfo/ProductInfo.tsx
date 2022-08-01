import React from 'react'
import { usePrice } from '../../../../hooks'
import { Button } from '../../../Common'
import { useProductContext } from '../../Product.context'
import { ColorCombination, ProductSizes } from '../../Components'

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
        <div className="mb-2.5 flex">
          <span className="text-sm mr-1 font-bold tracking-wider uppercase">
            Classics:
          </span>
          <span className="text-sm tracking-wide">
            {selectedVariant?.attributes?.colorName}
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {variants?.map((variant) => {
            return (
              <div
                key={`Colors__${variant.id}`}
                onClick={() => selectVariantById(variant.id)}>
                <ColorCombination colors={variant.colors} />
              </div>
            )
          })}
        </div>
        <div className="mt-5 mb-4">
          <div className="mb-3 text-sm uppercase font-bold tracking-wider">
            Select size:
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedVariant?.attributes?.sizes.map((size) => {
              return (
                <ProductSizes
                  key={`Sizes__${selectedVariant}--${size.size}`}
                  size={size.size}
                  available={size.available}
                />
              )
            })}
          </div>
        </div>
        <p className="mb-5 text-sm">
          This style is available in whole sizes only. In between sizes? We
          recommend you size down.See Size Chart
        </p>
        <Button type="secondary" width="100%">
          ADD TO CART - {formattedPrice}
        </Button>
        <span className="block text-center mt-3 text-sm">
          Free shipping on orders over $50. Free returns.
        </span>
      </div>
    </div>
  )
}
