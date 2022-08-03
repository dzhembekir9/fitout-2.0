import React, { useState } from 'react'
import { usePrice } from '../../../../hooks'
import { Button } from '../../../Common'
import { useProductContext } from '../../Product.context'
import { Collapse } from '../../../../components'
import { ColorCombination, ProductSizes, SizeChart } from '../../Components'

export const ProductInfo = () => {
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false)
  const [visibleAccordionIndex, setVisibleAccordionIndex] = useState<
    number | null
  >(0)

  const {
    name,
    getProductVariants,
    selectVariantById,
    selectedVariant,
    price,
    content,
  } = useProductContext()

  const variants = getProductVariants()

  const formattedPrice = usePrice({
    centAmount: price.originalPrice.centAmount ?? 0,
    fractionDigits: price.originalPrice.fractionDigits ?? 0,
  })

  type Data = {
    label: string
    content: string
  }

  const data: Data[] = [
    {
      label: 'DETAILS',
      content:
        ' Our breathable, silky-smooth sneaker made with responsibly sourced',
    },
    {
      label: 'SUSTAINABILITY',
      content:
        '  Our Tree Runner is carbon neutral thanks to sustainable practices, like using natural materials funding high impact carbon projects. But',
    },
    {
      label: 'SHIPPING & RETURNS',
      content:
        'Free shipping on orders over $50, and our 30 days, no questions asked return policy. Lightly worn shoes get donated to Soles4Souls. Visit',
    },
    {
      label: 'CARE GUIDE',
      content:
        ' 1. Remove the laces and insoles. 2. Place shoes in a delicates bag (pro tip: a pillowcase works too). 3. Choose a gentle cycle with cold',
    },
  ]

  return (
    <div className="pl-9 w-1/3">
      {isSizeChartOpen && (
        <SizeChart onClose={() => setIsSizeChartOpen(false)} />
      )}
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
                <ColorCombination
                  colors={variant.colors}
                  currentColor={selectedVariant?.id === variant.id}
                />
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
          recommend you size down.{' '}
          <span
            className="font-bold underline cursor-pointer"
            onClick={() => setIsSizeChartOpen(true)}>
            See Size Chart
          </span>
        </p>
        <div className="my-6">
          <Button type="secondary" width="100%">
            ADD TO CART - {formattedPrice}
          </Button>
          <span className="block text-center mt-3 text-sm">
            Free shipping on orders over $50. Free returns.
          </span>
        </div>
        <div className="mb-9">
          {content.map((data) => {
            if (data.key === 'highlights') {
              return <div dangerouslySetInnerHTML={{ __html: data.html }} />
            }
          })}
        </div>
        {data.map((acc, index) => {
          return (
            <div
              key={`Collapse__${acc.label}--${index}`}
              className="last-of-type:border-b border-grey">
              <Collapse
                title={acc.label}
                content={acc.content}
                index={index}
                visibleAccordionIndex={visibleAccordionIndex}
                setVisibleAccordionIndex={setVisibleAccordionIndex}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
