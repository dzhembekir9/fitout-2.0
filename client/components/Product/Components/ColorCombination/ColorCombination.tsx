import React, { CSSProperties } from 'react'
import cn from 'classnames'
import css from './ColorCombination.module.css'

const getRGBValue = (colorHex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex)
  if (result) {
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    return `${r}, ${g}, ${b}`
  }
  return null
}

export const ColorCombination = ({ colors }: { colors: string[] }) => {
  const mainColor = getRGBValue(colors[0])
  const soleColor = getRGBValue(colors[1])

  const swatch = `linear-gradient(135deg, rgb(${mainColor}) 50%, rgb(${soleColor}) 50%)`

  if (colors.length === 1) {
    return (
      <div
        style={
          {
            '--color': colors[0],
          } as CSSProperties
        }
        className={cn(css.ColorSwatch)}
      />
    )
  }

  return (
    <div
      style={
        {
          '--background': swatch,
        } as CSSProperties
      }
      className={cn(css.ColorSwatch, css.DoubleColor)}
    />
  )
}
