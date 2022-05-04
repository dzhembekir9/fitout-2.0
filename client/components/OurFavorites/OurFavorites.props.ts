export type OurFavoritesProps = {
  tabs: {
    title: string
    cards: CardProps[]
  }[]
}

export type CardsProps = {
  cards: CardProps[]
}

export type CardProps = {
  title: string
  label: string
  labelIcon: string
  image: {
    url: string
    width: number
    height: number
  }
}
