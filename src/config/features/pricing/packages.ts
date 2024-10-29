import { PRICING_PACKAGES } from './base'

export interface PricingPackagesConfig {
  type: string
  price: number
  isMonthly: boolean
  desc: string
}
export const pricingPackagesConfig: PricingPackagesConfig[] = [
  {
    type: 'basic',
    price: PRICING_PACKAGES.basic,
    isMonthly: true,
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.'
  },
  {
    type: 'standart',
    price: PRICING_PACKAGES.standart,
    isMonthly: true,
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.'
  },
  {
    type: 'premium',
    price: PRICING_PACKAGES.premium,
    isMonthly: true,
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.'
  }
]
