import React, { useState, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import { GET_PRODUCT } from '../../operations/queries'
import { useProduct } from '../../hooks'
import { Product } from '../../types/Product'

const ProductContext = createContext<Product>({
  id: null,
  name: '',
  metaTitle: '',
  metaDescription: '',
  createdAt: null,
  updatedAt: null,
  slug: '',
  content: [],
  attributes: [],
  variants: [],
  price: {
    originalPrice: {
      centAmount: 0,
      currencyCode: '',
      fractionDigits: null,
    },
  },
})

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode | string
}) => {
  const { query } = useRouter()
  const {
    product,
    isProductLoading,
    isVariantsLoading,
    productError,
    variants,
    selectVariantById,
    selectedVariant,
  } = useProduct({
    query: GET_PRODUCT,
    variables: {
      name: query.productName,
    },
  })

  return (
    <>
      <ProductContext.Provider value={product}>
        {children}
      </ProductContext.Provider>
    </>
  )
}

export const useProductInfo = () => {
  return useContext(ProductContext)
}
