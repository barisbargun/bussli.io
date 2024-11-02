import { assets } from '../assets'

export interface TestimonialConfig {
  stars: number
  title: string
  user: string
  job: string
  img: string
}

export const testimonialsConfig: TestimonialConfig[] = [
  {
    stars: 5,
    title:
      'OMG! I cannot believe that I have got a brand new landing page after getting Bussli. It was super easy to edit and publish.',
    user: 'Franklin Hicks',
    job: 'Web Developer',
    img: assets.images.testimonials[0]
  },
  {
    stars: 3,
    title:
      'OMG! I cannot believe that I have got a brand new landing page after getting Bussli. It was super easy to edit and publish.',
    user: 'Franklin Hicks',
    job: 'Web Developer',
    img: assets.images.testimonials[0]
  },
  {
    stars: 3,
    title:
      'OMG! I cannot believe that I have got a brand new landing page after getting Bussli. It was super easy to edit and publish.',
    user: 'Franklin Hicks',
    job: 'Web Developer',
    img: assets.images.testimonials[0]
  },
  {
    stars: 3,
    title:
      'OMG! I cannot believe that I have got a brand new landing page after getting Bussli. It was super easy to edit and publish.',
    user: 'Franklin Hicks',
    job: 'Web Developer',
    img: assets.images.testimonials[0]
  }
]
