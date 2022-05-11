import { useEffect } from 'react'

export const OverflowHidden = () => {
  useEffect(() => {
    document.body.style.width = document.body.clientWidth + 'px'
    document.documentElement.style.width = document.body.clientWidth + 'px'

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.width = ''
      document.documentElement.style.width = ''
    }
  }, [])

  return null
}
