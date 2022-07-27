import { useState } from 'react'
import { useQuery, DocumentNode } from '@apollo/client'

type QueryProps = {
  query: DocumentNode
  variables?: {
    productId: string
  }
}

export const useProductVariants = ({ query, variables }: QueryProps) => {
  const {
    loading: isLoading,
    data,
    error,
  } = useQuery(query, {
    variables,
  })

  return { isLoading, data, error }
}
