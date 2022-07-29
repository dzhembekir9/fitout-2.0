import { useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../operations/queries'
import { Variant } from '../types/Product'

type GetProductVariants = () => Variant[] | undefined

export const useProduct = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(
    undefined
  )
  const { query } = useRouter()
  const slug = query.productSlug

  const {
    data: product,
    loading: isLoading,
    error,
  } = useQuery(GET_PRODUCT, {
    variables: { slug },
  })

  const getProductVariants: GetProductVariants = () => {
    return product?.getProductBySlug?.variants
  }

  const selectVariantById = (id: string) => {
    const selectedVariant = getProductVariants()?.find(
      (variant) => variant.id === id
    )
    setSelectedVariant(selectedVariant)
  }

  return {
    product: product?.getProductBySlug,
    isLoading,
    error,
    getProductVariants,
    selectedVariant,
    selectVariantById,
  }
}
