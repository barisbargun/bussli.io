import { assets } from "../assets"

export interface ServicesConfig {
  color: string
  title: string
  desc: string
  link: {
    name: string
    url: string
  }
  illu: string
}

export const servicesConfig: ServicesConfig[] = [
  {
    color: 'bg-emerald-400',
    title: 'Graphic Design',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    link: {
      name: 'Learn more',
      url: ''
    },
    illu: assets.svg.illustrations.designerLife
  },
  {
    color: 'bg-indigo-600',
    title: 'Web Development',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    link: {
      name: 'Learn more',
      url: ''
    },
    illu: assets.svg.illustrations.proudCoder
  },
  {
    color: 'bg-red-500',
    title: 'Content Writing',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    link: {
      name: 'Learn more',
      url: ''
    },
    illu: assets.svg.illustrations.imageViewer
  }
]
