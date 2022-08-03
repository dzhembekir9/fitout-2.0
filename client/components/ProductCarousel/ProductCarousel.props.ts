export type ProductCarouselProps = {
  title: string
  cards: CardProps[]
}

export type CardProps = {
  title: string
  content: string
  image: {
    src: string
    width: number
    height: number
  }
  href: string
}
