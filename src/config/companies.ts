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
      title: 'Company name'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name2'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name3'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name4'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name5'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name6'
    }
  ]
}
