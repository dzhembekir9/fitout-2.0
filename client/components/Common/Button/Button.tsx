import React, { CSSProperties } from 'react'
import css from './Button.module.css'
import cn from 'classnames'
import Link from 'next/link'

type ButtonProps = {
  type?: 'primary' | 'secondary'
  onClick?: () => void
  children: React.ReactNode | string
  href?: string
  width?: string
  className?: string
  breakWord?: boolean
}

export const Button = ({
  type = 'primary',
  children,
  onClick,
  href,
  width,
  className,
  breakWord = false,
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <a
          className={cn(css.Button, className, {
            [css.Primary]: type === 'primary',
            [css.Secondary]: type === 'secondary',
            'whitespace-normal': breakWord,
            'whitespace-nowrap': !breakWord,
          })}
          style={
            {
              '--width': width ? `${width}` : 'auto',
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
      className={cn(css.Button, className, {
        [css.Primary]: type === 'primary',
        [css.Secondary]: type === 'secondary',
        'whitespace-normal': breakWord,
        'whitespace-nowrap': !breakWord,
      })}
      style={
        {
          '--width': width ? `${width}` : 'auto',
        } as CSSProperties
      }>
      {children}
    </button>
  )
}
