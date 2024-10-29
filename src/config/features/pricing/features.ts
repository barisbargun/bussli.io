import { PRICING_PACKAGES } from './base'

export interface PricingFeaturesConfig {
  type: string
  cost: number
  featureCount: number
  isCreditCardRequire: boolean
  to: string
}
export const pricingFeaturesConfig: PricingFeaturesConfig[] = [
  {
    type: 'basic',
    cost: PRICING_PACKAGES.basic,
    featureCount: 3,
    isCreditCardRequire: false,
    to: ''
  },
  {
    type: 'standart',
    cost: PRICING_PACKAGES.standart,
    featureCount: 4,
    isCreditCardRequire: false,
    to: ''
  },
  {
    type: 'premium',
    cost: PRICING_PACKAGES.premium,
    featureCount: 5,
    isCreditCardRequire: false,
    to: ''
  }
]
