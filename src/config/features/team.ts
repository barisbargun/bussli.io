import { assets } from '../assets'

const images = assets.images.teamAvatars

export interface TeamConfig {
  src: string
  name: string
  role: string
}

export const teamConfig: TeamConfig[] = [
  { src: images[0], name: 'Joe Bridges', role: 'Founder' },
  { src: images[1], name: 'Guy Hawkins', role: 'Chief Technology Officer' },
  { src: images[2], name: 'Robert Fox', role: 'Creative Director' },
  { src: images[3], name: 'Jacob Jones', role: 'Digital Marketer' },
  { src: images[4], name: 'Albert Flores', role: 'UX Designer' },
  { src: images[5], name: 'Kristin Watson', role: 'Lead Programmer' },
  { src: images[6], name: 'Jacob Hawkins', role: 'Programmer' }
]
