import { pageLinks } from './config'

export interface TopbarConfig {
  name: string
  url: string
}

export const topbarConfig: TopbarConfig[] = [
  {
    name: 'Request a demo',
    url: pageLinks.contact.url
  },
  {
    name: 'Pricing',
    url: pageLinks.pricing.url
  },
  {
    name: 'About',
    url: pageLinks.about.url
  },
  {
    name: 'Terms',
    url: pageLinks.terms.url
  }
]
