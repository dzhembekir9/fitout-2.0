const { gql } = require('apollo-server-express')

const typeDefs = gql`
  """
  Content Type
  """
  type ContentType {
    label: String!
    content: String
  }

  input ContentTypeInput {
    label: String!
    content: String
  }

  type Content {
    key: String!
    label: String
    content: [ContentType]
    html: String
  }

  input ContentInput {
    key: String!
    label: String
    content: [ContentTypeInput]
    html: String
  }

  """
  Attribute Type
  """
  type Attribute {
    attributes: [String]
    images: [Image]!
    custom: String
  }

  input AttributeInput {
    attributes: [String]
    images: [ImageInput]!
    custom: String
  }

  type Image {
    thumb: String
    original: String!
  }

  input ImageInput {
    thumb: String
    original: String!
  }

  """
  Price Type
  """
  type OriginalPrice {
    centAmount: Int!
    currencyCode: String!
    fractionDigits: Int!
  }

  input OriginalPriceInput {
    centAmount: Int!
    currencyCode: String!
    fractionDigits: Int!
  }

  type Price {
    originalPrice: OriginalPrice
    offers: String
  }

  input PriceInput {
    originalPrice: OriginalPriceInput
    offers: String
  }

  """
  Product Type
  """
  type Product {
    name: String!
    metaTitle: String!
    metaDescription: String!
    createdAt: String
    updatedAt: String
    slug: String!
    content: [Content!]!
    attributes: [String]!
    variants: [Attribute]!
    price: Price
  }

  input ProductInput {
    name: String!
    metaTitle: String!
    metaDescription: String!
    createdAt: String
    updatedAt: String
    slug: String!
    content: [ContentInput!]!
    attributes: [String]!
    variants: [AttributeInput]!
    price: PriceInput
  }

  type Query {
    hello: String
    getAllProducts: [Product]!
    getProductByName(name: String): Product
  }

  type Mutation {
    createProduct(product: ProductInput): Product
  }
`

module.exports = typeDefs
