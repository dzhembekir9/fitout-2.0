export interface Product {
  id: string | null
  name: string
  metaTitle: string
  metaDescription: string
  createdAt: Date | null
  updatedAt: Date | null
  slug: string
  content: Content[]
  attributes: string[]
  variants: Variant[]
  price: Price
}

export interface Variant {
  id: string
  attributes: Attributes
  images: Image[]
  colors: string[]
}

export interface Price {
  originalPrice: {
    centAmount: number | null
    currencyCode: string
    fractionDigits: number | null
  }
}

export interface Attributes {
  sizes: Size[]
  colorName: string
}

export interface Size {
  size: number
  available: boolean
}

export interface Content {
  key: string
  html: string
}

export interface Image {
  original: string
  thumb?: string
}
