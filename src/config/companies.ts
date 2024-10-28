import { assets } from '@/config'

export interface CompanyConfig {
  title: string
  companies: {
    icon: string
    title: string
  }[]
}

export const companiesConfig: CompanyConfig = {
  title: 'Join 400+ companies already growing',
  companies: [
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name'
    },
    {
      icon: assets.svg.icons.company.company,
      title: 'Company name'
    }
  ]
}
