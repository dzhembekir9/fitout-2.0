import { useWindowSize } from '../../../hooks'

export const useBannerWidth = () => {
  const { width: windowWidth } = useWindowSize()

  let width = 2545

  if (windowWidth > 1280 && windowWidth <= 1536) {
    width = 1800
  } else if (windowWidth > 1024 && windowWidth <= 1280) {
    width = 1440
  } else if (windowWidth > 768 && windowWidth <= 1024) {
    width = 1145
  } else if (windowWidth > 640 && windowWidth <= 768) {
    width = 800
  } else if (windowWidth < 640) {
    width = 500
  }

  return { width }
}
