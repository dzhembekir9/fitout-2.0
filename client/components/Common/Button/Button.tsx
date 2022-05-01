import React, { CSSProperties } from 'react'
import css from './Button.module.css'
import cn from 'classnames'
import Link from 'next/link'

type ButtonProps = {
  type?: 'primary' | 'secondary'
  onClick?: () => void
  children: JSX.Element | string
  href?: string
  width?: number
}

export const Button = ({
  type = 'primary',
  children,
  onClick,
  href,
  width,
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <a
          className={cn(css.Button, {
            [css.Primary]: type === 'primary',
            [css.Secondary]: type === 'secondary',
          })}
          style={
            {
              '--width': width + 'px' ?? 'auto',
            } as CSSProperties
          }>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(css.Button, {
        [css.Primary]: type === 'primary',
        [css.Secondary]: type === 'secondary',
      })}
      style={
        {
          '--width': width + 'px' ?? 'auto',
        } as CSSProperties
      }>
      {children}
    </button>
  )
}
