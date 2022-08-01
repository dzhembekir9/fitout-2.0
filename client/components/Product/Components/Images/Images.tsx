import React from 'react'
import { useProductContext } from '../../Product.context'
import { ImageComponent } from './Components'

export const Images = () => {
  const { name, selectedVariant } = useProductContext()

  return (
    <div className="grid grid-cols-2 gap-3 w-2/3">
      {selectedVariant?.images.map((image, index: number) => {
        return (
          <ImageComponent
            key={`Image__${image.original}`}
            original={image.original}
            productName={name}
            images={selectedVariant?.images}
            index={index}
          />
        )
      })}
    </div>
  )
}
