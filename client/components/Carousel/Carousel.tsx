import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import css from './Carousel.module.css'

type CarouselProps = {
  slides: any
  renderSlide: (data: any, index?: number) => React.ReactNode
  scrollTo?: number
}

export const Carousel = ({ renderSlide, slides, scrollTo }: CarouselProps) => {
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
      <div className={css.Viewport} ref={viewportRef}>
        <div className={css.Container}>
          {slides.map((slide, index: number) => (
            <div className={css.Slide} key={index}>
              <div className={css.Inner}>{renderSlide(slide)}</div>
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  )
}
