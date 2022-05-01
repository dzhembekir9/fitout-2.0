import { useWindowSize } from '../../../hooks'

export const useImageSize = () => {
  const { width } = useWindowSize()

  let imageWidth = 0
  let imageHeight = 0

  if (width <= 367) {
    imageWidth = 530
    imageHeight = 1200
  } else if (width > 367 && width <= 440) {
    imageWidth = 700
    imageHeight = 1200
  } else if (width > 440 && width < 518) {
    imageWidth = 850
    imageHeight = 1200
  } else {
    imageWidth = 800
    imageHeight = 790
  }

  return { imageWidth, imageHeight }
}
