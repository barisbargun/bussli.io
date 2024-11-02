import { assets } from '../assets'

const images = assets.images.teamAvatars

export interface TeamConfig {
  img: string
  name: string
  role: string
}

export const teamConfig: TeamConfig[] = [
  { img: images[0], name: 'Joe Bridges', role: 'Founder' },
  { img: images[1], name: 'Guy Hawkins', role: 'Chief Technology Officer' },
  { img: images[2], name: 'Robert Fox', role: 'Creative Director' },
  { img: images[3], name: 'Jacob Jones', role: 'Digital Marketer' },
  { img: images[4], name: 'Albert Flores', role: 'UX Designer' },
  { img: images[5], name: 'Kristin Watson', role: 'Lead Programmer' },
  { img: images[6], name: 'Joe Bridges', role: 'Programmer' }
]
