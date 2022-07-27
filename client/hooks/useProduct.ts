import { useState } from 'react'
import { useQuery, DocumentNode } from '@apollo/client'
import { useProductVariants } from '../hooks'
import { GET_VARIANTS } from '../operations/queries'

type QueryProps = {
  query: DocumentNode
  variables?: any
}

export const useProduct = ({ query, variables }: QueryProps) => {
  const [selectedVariant, setSelectedVariant] = useState('')

  const {
    data: product,
    loading: isProductLoading,
    error: productError,
  } = useQuery(query, {
    variables,
  })

  const {
    data: variants,
    isLoading: isVariantsLoading,
    error: variantsError,
  } = useProductVariants({
    query: GET_VARIANTS,
    variables: { productId: product?.getProductBySlug.id },
  })

  const selectVariantById = (id: string) => {
    const selectedVariant = variants?.getAllVariants.find(
      (variant) => variant.id === id
    )
    setSelectedVariant(selectedVariant)
  }

  return {
    product,
    isProductLoading,
    productError,
    selectedVariant,
    variants,
    isVariantsLoading,
    variantsError,
    selectVariantById,
  }
}
