import React, { useState, useRef, useEffect } from 'react'
import css from './MobileNavbar.module.css'
import { IconCart } from '../../../Common'
import { MobileNavigation } from '../../Components'

export const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleBurgerClick = () => {
    setIsDrawerOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isDrawerOpen) {
      containerRef.current?.classList.add('is-active')
    } else {
      containerRef.current?.classList.remove('is-active')
    }
  }, [isDrawerOpen])

  return (
    <div>
      <nav className={css.Wrapper}>
        <div
          className={css.Hamburger}
          ref={containerRef}
          onClick={handleBurgerClick}
          id="hamburger-1">
          <span className={css.HamburgerLine} />
          <span className={css.HamburgerLine} />
          <span className={css.HamburgerLine} />
        </div>
        <div className="text-3xl">Fitout</div>
        <div>
          <IconCart />
        </div>
      </nav>
      {isDrawerOpen && <MobileNavigation />}
    </div>
  )
}
