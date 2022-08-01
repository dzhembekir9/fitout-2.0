import React from 'react'
import css from './Modal.module.css'
import { OverflowHidden } from '../OverflowHidden'

type ModalProps = {
  children: React.ReactNode | string
  onClose: () => void
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={css.Wrapper}>
      <OverflowHidden />
      <div className={css.Content}>
        <div className={css.CloseIcon} onClick={onClose} />
        {children}
      </div>
    </div>
  )
}
