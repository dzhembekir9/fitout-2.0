import React from 'react'
import Image from 'next/image'
import { Button } from '../Common'
import { useImageSize } from './utils'

export const HomePageHero = () => {
  const { imageWidth, imageHeight } = useImageSize()

  return (
    <div className="relative mb-32">
      <div className="hidden md:block">
        <Image
          src="https://i.imgur.com/tGCOCrf.png"
          alt="hero"
          width={2048}
          height={880}
          objectFit="cover"
          layout="responsive"
        />
      </div>

      <div className="block md:hidden">
        <Image
          src="https://i.imgur.com/l3nR9SC.png"
          alt="hero"
          width={imageWidth}
          height={imageHeight}
          objectFit="cover"
          layout="responsive"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-4xl lg:text-5xl font-bold text-center tracking-wide">
          Made from Trees. Designed for Sun.
        </h1>
        <p className="text-white text-sm lg:text-lg font-bold text-center mt-1 tracking-wide">
          Shop shoes made with light & breezy eucalyptus tree fiber.
        </p>
      </div>
      <div className="absolute bottom-10 lg:bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col gap-y-3 sm:flex-row justify-center gap-x-6">
        <Button href="#" width={180} className="text-sm">
          SHOP MEN
        </Button>
        <Button href="#" width={180} className="text-sm">
          SHOP WOMEN
        </Button>
      </div>
    </div>
  )
}
