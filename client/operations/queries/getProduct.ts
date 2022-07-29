import { gql } from '@apollo/client'

export const GET_PRODUCT = gql`
  query GetProductBySlug($slug: String) {
    getProductBySlug(slug: $slug) {
      id
      name
      slug
      attributes
      variants {
        id
        attributes {
          sizes
          color
        }
        images {
          original
        }
      }
      price {
        originalPrice {
          centAmount
          fractionDigits
        }
      }
    }
  }
`
