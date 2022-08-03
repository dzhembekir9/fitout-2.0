import React from 'react'
import Image from 'next/image'
import { useWindowSize } from '../../hooks'
import { Carousel, Layout, ProductCarousel } from '../../components'
import {
  DesktopProductPage,
  Images,
  MobileProductPage,
  ProductInfo,
} from './Components'
import { useProductContext } from './Product.context'

import { newArrivalData } from '../ProductCarousel/ProductCarousel.template'

const ImagesCarousel = () => {
  const { name, selectedVariant } = useProductContext()

  if (!selectedVariant) return null

  return (
    <div>
      <Carousel
        slides={selectedVariant?.images}
        slideWidth={300}
        overflow="visible"
        withButtons
        renderSlide={(image) => {
          return (
            <Image
              src={image.original}
              alt={name}
              width={300}
              height={300}
              layout="responsive"
            />
          )
        }}
      />
    </div>
  )
}

export const Product = () => {
  const { name, isLoading } = useProductContext()

  const { width } = useWindowSize()

  if (!name) return <h1>Error page</h1>

  if (isLoading) return <h1>loading...</h1>

  return (
    <Layout pageTitle={name}>
      <div className="pt-16 layout">
        <div className="mb-16.5">
          {width >= 976 ? <Images /> : <ImagesCarousel />}
          <ProductInfo />
          {/* {width >= 976 ? <DesktopProductPage /> : <MobileProductPage />} */}
        </div>
        <ProductCarousel
          slideWidth={291}
          title={'Recently Viewed'}
          cards={newArrivalData.cards}
          withBoxShadow
        />
      </div>
    </Layout>
  )
}
