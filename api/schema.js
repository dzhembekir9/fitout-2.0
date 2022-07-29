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
    color: String
    sizes: [Int]
  }

  type Attributes {
    id: String
    attributes: Attribute
    images: [Image]!
    custom: String
  }

  input AttributeInput {
    color: String
    sizes: [Int]
  }

  input AttributesInput {
    attributes: AttributeInput
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
    id: ID!
    name: String!
    metaTitle: String!
    metaDescription: String!
    createdAt: String
    updatedAt: String
    slug: String!
    content: [Content!]!
    attributes: [String]!
    variants: [Attributes]
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
    variants: [AttributesInput]
    price: PriceInput
  }

  type Query {
    getAllProducts: [Product]!
    getProductBySlug(slug: String): Product
  }

  type Mutation {
    createProduct(product: ProductInput): Product
    deleteProduct(id: ID!): String
    editProductById(id: ID!, product: ProductInput): Product
  }
`

module.exports = typeDefs
