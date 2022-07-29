import React from 'react'
import { NextPage } from 'next'
import { Product } from '../../components'
import { ProductContextProvider } from '../../components/Product/Product.context'

const ProductPage: NextPage = () => {
  return (
    <ProductContextProvider>
      <Product />
    </ProductContextProvider>
  )
}

export default ProductPage
