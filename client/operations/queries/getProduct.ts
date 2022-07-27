import { gql } from '@apollo/client'

export const GET_PRODUCT = gql`
  query GetProductBySlug($name: String) {
    getProductBySlug(slug: $name) {
      id
      name
      slug
      variants {
        attributes {
          sizes
          color
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
