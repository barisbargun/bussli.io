import { assets } from '../assets'

export interface ProductsConfig {
  nav: string
  title: string
  img: string
}

export const productsConfig: ProductsConfig[] = [
  {
    nav: 'Graphic Design',
    title: 'Lorem Branding Design',
    img: assets.images.brands[0]
  },
  {
    nav: 'Web Development',
    title: 'Gradient Website Development',
    img: assets.images.brands[1]
  },
  {
    nav: 'Graphic Design',
    title: 'Yogurt Snack Packaging',
    img: assets.images.brands[2]
  },
  {
    nav: 'Content Writing',
    title: 'Magazine Content Writing',
    img: assets.images.brands[3]
  }
]
