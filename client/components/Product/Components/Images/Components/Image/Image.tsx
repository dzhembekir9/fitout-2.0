import React, { useRef, useState } from 'react'
import NextImage from 'next/image'
import { useOutsideClick } from '../../../../../../hooks'
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

  const containerRef = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onOutsideClick = () => {
    closeModal()
    setIsHovered(false)
  }

  useOutsideClick(containerRef, onOutsideClick)

  const width = 450
  const height = 450

  return (
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
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="h-full" ref={containerRef}>
            <Carousel
              slides={images}
              slideWidth={1000}
              withButtons
              loop
              startIndex={index}
              withDots
              renderSlide={(image) => {
                return (
                  <NextImage
                    src={image.original}
                    alt={productName}
                    width={530}
                    height={530}
                  />
                )
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  )
}
