import React, { createContext, useContext } from 'react'
import { useProduct } from '../../hooks'
import { Product, Variant } from '../../types/Product'

type ProductProps = {
  isLoading: boolean
  error: any
  getProductVariants: () => Variant[] | undefined
  selectVariantById: (id: string) => void
  selectedVariant: Variant | undefined
} & Product

const ProductContext = createContext<ProductProps>({
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
  selectedVariant: undefined,
  selectVariantById: () => {},
  error: null,
  isLoading: true,
  getProductVariants: () => undefined,
})

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode | string
}) => {
  const {
    product,
    isLoading,
    error,
    getProductVariants,
    selectedVariant,
    selectVariantById,
  } = useProduct()

  const values: ProductProps = {
    id: product?.id,
    name: product?.name,
    metaTitle: product?.metaTitle,
    metaDescription: product?.metaDescription,
    createdAt: product?.createdAt,
    updatedAt: product?.updatedAt,
    slug: product?.slug,
    content: product?.content,
    attributes: product?.attributes,
    variants: product?.variants,
    price: product?.price,
    selectedVariant,
    selectVariantById,
    error,
    isLoading,
    getProductVariants,
  }

  return (
    <>
      <ProductContext.Provider value={values}>
        {children}
      </ProductContext.Provider>
    </>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
