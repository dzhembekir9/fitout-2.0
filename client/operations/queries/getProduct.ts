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
        colors
        attributes {
          sizes {
            size
            available
          }
          colorName
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
