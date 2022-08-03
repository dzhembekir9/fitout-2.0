import React, { CSSProperties, useRef } from 'react'
import css from './Modal.module.css'
import { useOutsideClick } from '../../../hooks'
import { OverflowHidden } from '../OverflowHidden'

type ModalProps = {
  children: React.ReactNode | string
  onClose: () => void
  width?: string
  height?: string
  backgroundColor?: 'white' | 'grey'
}

export const Modal = ({
  children,
  onClose,
  width,
  height,
  backgroundColor = 'white',
}: ModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useOutsideClick(containerRef, onClose)

  return (
    <div className={css.Wrapper}>
      <OverflowHidden />
      <div
        ref={containerRef}
        style={
          {
            '--width': width || '95%',
            '--height': height || '95%',
            '--background':
              backgroundColor === 'white'
                ? 'rgb(255, 255, 255)'
                : 'rgb(245, 245, 245)',
          } as CSSProperties
        }
        className={css.Content}>
        <div className={css.CloseIcon} onClick={onClose} />
        {children}
      </div>
    </div>
  )
}
