import React from 'react'
import Link from 'next/link'
import css from './Item.module.css'

type ItemProps = {
  content: {
    label: string
    url?: string
  }[]
}

export const Item = ({ content }: ItemProps) => {
  return (
    <ul>
      {content.map((item) => {
        return (
          <li key={`Item__${item.label}`} className={css.ListItem}>
            {Boolean(item.url) ? (
              <Link href={item.url ?? '#'} passHref>
                <a>{item.label}</a>
              </Link>
            ) : (
              <span className={css.ListItem}>{item.label}</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
