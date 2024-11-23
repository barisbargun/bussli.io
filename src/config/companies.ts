import { assets } from './assets'

export interface CompanyConfig {
  companies: {
    icon: string
    title: string
  }[]
}

export const companiesConfig: CompanyConfig = {
  companies: [
    {
      icon: assets.svg.icons.company.company,
      title: 'Company'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company2'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company3'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company4'
    }
  ]
}
