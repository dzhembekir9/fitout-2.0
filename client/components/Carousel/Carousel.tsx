import React, { useState, useEffect, useCallback, CSSProperties } from 'react'
import cn from 'classnames'
import useEmblaCarousel from 'embla-carousel-react'
import css from './Carousel.module.css'
import { IconChevronRight } from '../Common/Icons'

type CarouselProps = {
  slides: any
  renderSlide: (data: any, index?: number) => React.ReactNode
  scrollTo?: number
  slideWidth?: number
  overflow?: 'hidden' | 'visible'
  withButtons?: boolean
}

export const Carousel = ({
  renderSlide,
  slides,
  scrollTo,
  slideWidth,
  overflow = 'hidden',
  withButtons,
}: CarouselProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
  })

  useEffect(() => {
    if (scrollTo) {
      embla?.scrollTo(scrollTo)
    }
  }, [scrollTo, embla])

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className={css.Wrapper}>
      <div
        className={cn(css.Viewport, {
          container: overflow === 'visible',
        })}
        style={
          {
            '--overflow': overflow,
          } as CSSProperties
        }
        ref={viewportRef}>
        <div className={css.Container}>
          {slides.map((slide: any, index: number) => (
            <div
              className={css.Slide}
              style={
                {
                  '--slideWidth': slideWidth ? `${slideWidth}px` : 'auto',
                } as CSSProperties
              }
              key={index}>
              <div className={css.Inner}>{renderSlide(slide)}</div>
            </div>
          ))}
        </div>
      </div>
      {withButtons && (
        <div className="hidden lg:block">
          {prevBtnEnabled && (
            <button
              className={cn(css.Button, css.PrevButton)}
              onClick={scrollPrev}>
              <IconChevronRight />
            </button>
          )}
          {nextBtnEnabled && (
            <button
              className={cn(css.Button, css.NextButton)}
              onClick={scrollNext}>
              <IconChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
