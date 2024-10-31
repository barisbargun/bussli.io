import { Variants } from 'framer-motion'

type Directions = '' | 'left' | 'right' | 'up' | 'down'
type Types = 'tween' | 'spring' | 'inertia'
type ease = 'easeIn' | 'easeOut' | 'easeInOut'

type FadeInProps = {
  direction?: Directions
  directionAmount?: number
  type?: Types
  delay?: number
  duration?: number
  ease?: ease
}
const fadeIn = ({
  direction = 'up',
  directionAmount = 50,
  type = 'spring',
  delay = 0.1,
  duration = 1.25,
  ease
}: FadeInProps) => {
  return {
    hidden: {
      x: direction === 'left' ? -directionAmount : (direction === 'right' ? directionAmount : 0),
      y: direction === 'up' ? -directionAmount : (direction === 'down' ? directionAmount : 0),
      opacity: 0
    },
    show: (time: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay * time,
        duration: duration,
        ease: ease
      }
    })
  } as Variants
}

type TextVariantProps = {
  top?: number
  delay?: number
}
const textVariant = ({ top = -50, delay }: TextVariantProps) => {
  return {
    hidden: {
      y: top,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay
      }
    }
  }
}

const motions = { fadeIn, textVariant }

export { motions }
