import React, { useState } from 'react'
import NextImage from 'next/image'
import { Image as ImageProps } from '../../../../../../types/Product'
import { Modal } from '../../../../../Common'
import { PlusInCircle } from '../../../../../Common/Icons'
import { Carousel } from '../../../../../Carousel'

type Image = {
  productName: string
  images: ImageProps[]
  index: number
} & ImageProps

export const ImageComponent = ({
  original,
  productName,
  images,
  index,
}: Image) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
    setIsHovered(false)
  }

  const width = 450
  const height = 450

  return (
    <>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer relative">
        {isHovered && (
          <div className="center z-50">
            <PlusInCircle />
          </div>
        )}
        <NextImage
          src={original}
          alt={productName}
          width={width}
          height={height}
        />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} backgroundColor="grey">
          <Carousel
            slides={images}
            slideWidth={1000}
            withButtons
            loop
            startIndex={index}
            withDots
            renderSlide={(image) => {
              return (
                <div className="w-full h-full">
                  <NextImage
                    src={image.original}
                    alt={productName}
                    layout="responsive"
                    width="100%"
                    height="86%"
                    objectFit="contain"
                  />
                </div>
              )
            }}
          />
        </Modal>
      )}
    </>
  )
}
