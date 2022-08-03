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
      content {
        key
        html
        content {
          label
          content
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
