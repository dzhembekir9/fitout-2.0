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
  loop?: boolean
  dragFree?: boolean
  startIndex?: number
  withDots?: boolean
}

export const Carousel = ({
  renderSlide,
  slides,
  scrollTo,
  slideWidth,
  overflow = 'hidden',
  withButtons,
  loop = false,
  dragFree = false,
  startIndex = 0,
  withDots = false,
}: CarouselProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree,
    containScroll: 'trimSnaps',
    loop,
    startIndex,
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

  const [currentSlide, setCurrentSlide] = useState(startIndex)

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
    setCurrentSlide(embla?.selectedScrollSnap())
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
      {withDots && (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          {Array.from({ length: slides?.length }).map((_, index) => {
            return (
              <div
                key={`Dot__${index}`}
                className={cn(css.Dot, {
                  [css.CurrentDot]: currentSlide === index,
                })}
                onClick={() => embla?.scrollTo(index)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
