import React from 'react'
import Image from 'next/image'
import { Button } from '../Common'
import { useBannerWidth } from './utils'

type BannerProps = {
  src: string
  title: string
  description: string
  buttonLabel: string
  secondButtonLabel?: string
  buttonHref?: string
  secondButtonHref?: string
  breakButtonText?: boolean
}

export const Banner = ({
  src,
  title,
  description,
  buttonLabel,
  secondButtonLabel,
  buttonHref,
  secondButtonHref,
  breakButtonText = false,
}: BannerProps) => {
  const { width } = useBannerWidth()

  return (
    <div>
      <Image
        src={src}
        alt={title}
        width={width}
        height={542}
        objectFit="cover"
        layout="responsive"
      />
      <div className="flex flex-col items-center mt-12 lg:container mx-6">
        <h2 className="text-4xl font-bold mb-4.5 text-center md:w-1/2">
          {title}
        </h2>
        <p className="mb-4.5 text-center md:w-1/2">{description}</p>
        <div className="flex flex-col items-center sm:flex-row gap-x-5 gap-y-2 mt-3">
          <Button
            href={buttonHref}
            type="secondary"
            className="text-md self-stretch"
            width={!secondButtonLabel ? 370 : 158}
            breakWord={breakButtonText}>
            {buttonLabel}
          </Button>
          {secondButtonLabel && (
            <Button
              href={secondButtonHref}
              type="secondary"
              className="text-md self-stretch"
              width={158}
              breakWord={breakButtonText}>
              {secondButtonLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
