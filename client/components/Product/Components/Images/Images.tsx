import React from 'react'
import Image from 'next/image'
import { useProductContext } from '../../Product.context'

export const Images = () => {
  const width = 450
  const height = 450

  const { selectedVariant } = useProductContext()

  return (
    <div className="grid grid-cols-2 gap-3 w-2/3">
      {selectedVariant?.images.map((image) => {
        return (
          <Image
            key={`Image__${image.original}`}
            src={image.original}
            alt={'asd'}
            width={width}
            height={height}
          />
        )
      })}
    </div>
  )
}
