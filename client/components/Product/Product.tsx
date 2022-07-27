import React from 'react'
import { Layout } from '../../components'
import { Images, ProductInfo } from './Components'

export const Product = ({
  product,
  variants,
  selectVariantById,
  selectedVariant,
}: any) => {
  console.log(selectedVariant)

  return (
    <Layout pageTitle={product.name}>
      <div className="pt-16">
        <div className="container flex">
          <Images />
          <ProductInfo />
        </div>
        <div>html</div>
        <button
          onClick={() => {
            selectVariantById('89ddaf4a-fa63-4ca0-aeaa-342f68f67d23')
          }}>
          Click
        </button>
      </div>
    </Layout>
  )
}
