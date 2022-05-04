import React from 'react'
import Image from 'next/image'
import css from './Footer.module.css'
import { footerData } from './Footer.template'
import { Item } from './Components'
import {
  FlagNZ,
  FlagUS,
  FlagAU,
  FlagUK,
  FlagCN,
  IconInstagram,
  IconTwitter,
  IconFacebook,
  IconPinterest,
} from '../Common'

export const Footer = () => {
  const { firstRow, secondRow, thirdRow } = footerData

  return (
    <footer className={css.Wrapper}>
      <div className={css.Container}>
        <div className={css.FirstRow}>
          {firstRow.map((col) => {
            return (
              <div className="mb-11 lg:mb-0" key={`Col__${col.title}`}>
                <h3 className={css.Title}>{col.title}</h3>
                <Item content={col.content} />
              </div>
            )
          })}
        </div>
        <div className={css.SecondRow}>
          <div>
            <h3 className={css.Title}>{secondRow.social.title}</h3>
            <p className={css.Text}>{secondRow.social.text}</p>
            <div className={css.SocialIconsWrapper}>
              <IconInstagram />
              <IconTwitter />
              <IconFacebook />
              <IconPinterest />
            </div>
          </div>
          <div className={css.ImageWrapper}>
            <Image
              src={secondRow.singleImage.url}
              alt={secondRow.singleImage.alt}
              width={secondRow.singleImage.width}
              height={secondRow.singleImage.height}
            />
          </div>
          <div className={css.IconsWrapper}>
            <FlagUS />
            <FlagNZ />
            <FlagAU />
            <FlagUK />
            <FlagCN />
          </div>
        </div>
        <div>
          <p className={css.BottomText}>{thirdRow.text}</p>
        </div>
      </div>
    </footer>
  )
}
