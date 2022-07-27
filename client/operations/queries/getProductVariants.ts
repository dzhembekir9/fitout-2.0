import { gql } from '@apollo/client'

export const GET_VARIANTS = gql`
  query GetAllVariants($productId: ID!) {
    getAllVariants(productId: $productId) {
      id
      custom
      attributes {
        sizes
        color
      }
      images {
        thumb
        original
      }
    }
  }
`
