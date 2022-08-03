import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import css from './Collapse.module.css'
import cn from 'classnames'
import { IconChevronRight } from '../Common/Icons'

type CollapseProps = {
  visibleAccordionIndex: number | null
  setVisibleAccordionIndex: React.Dispatch<React.SetStateAction<number | null>>
  title: string
  content: string
  index: number
}

export const Collapse = ({
  visibleAccordionIndex,
  setVisibleAccordionIndex,
  title,
  content,
  index,
}: CollapseProps) => {
  const CONTENT_PADDING = 12

  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(
    contentRef.current?.scrollHeight ?? 0
  )

  const currentDropdown = visibleAccordionIndex === index

  const onClick = (index: number) => {
    setContentHeight((contentRef.current?.scrollHeight ?? 0) + CONTENT_PADDING)
    if (currentDropdown) {
      setVisibleAccordionIndex(null)
    } else {
      setVisibleAccordionIndex(index)
    }
  }

  useEffect(() => {
    setContentHeight(contentRef.current?.scrollHeight ?? 0)
  }, [])

  return (
    <div className="flex flex-col items-start">
      <div className={css.Toggle}>
        <button className={css.Button} onClick={() => onClick(index)}>
          <p className="text-sm font-bold tracking-widest">{title}</p>
          <IconChevronRight
            className={cn({
              [css.RotateClockwise]: currentDropdown,
              [css.RotateCounterClockwise]: !currentDropdown,
            })}
          />
        </button>
        <div
          ref={contentRef}
          className={cn(css.Content, {
            [css.ShowContent]: currentDropdown,
            [css.HideContent]: !currentDropdown,
          })}
          style={
            {
              '--height': `${contentHeight}px`,
            } as CSSProperties
          }>
          {content}
        </div>
      </div>
    </div>
  )
}
