export const pricingPackagesConfig = {
  packages: {
    basic: 23,
    standart: 59,
    premium: 89
  },
  discount: 45
}
const packages = pricingPackagesConfig.packages

export const pricingPackageConfig: string[] = [
  'Commercial License',
  '100+ HTML UI Elements',
  '01 Domain Support',
  '6 Month Premium Support',
  'Lifetime Updates'
]

export interface PricingConfig {
  type: string
  price: number
  isMonthly: boolean
  desc: string
}
export const pricingConfig: PricingConfig[] = [
  {
    type: 'basic',
    price: packages.basic,
    isMonthly: true,
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.'
  },
  {
    type: 'standart',
    price: packages.standart,
    isMonthly: true,
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.'
  },
  {
    type: 'premium',
    price: packages.premium,
    isMonthly: true,
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.'
  }
]

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
    cost: packages.basic,
    featureCount: 3,
    isCreditCardRequire: false,
    to: ''
  },
  {
    type: 'standart',
    cost: packages.standart,
    featureCount: 4,
    isCreditCardRequire: false,
    to: ''
  },
  {
    type: 'premium',
    cost: packages.premium,
    featureCount: 5,
    isCreditCardRequire: false,
    to: ''
  }
]

export interface PricingComparePlansConfig {
  f: string
  tip: string
  b: any
  s: any
  p: any
}
export const pricingComparePlansConfig: PricingComparePlansConfig[] = [
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'live support', tip: 'Bussli.io', b: false, s: 'Email', p: '1-1 support' },
  { f: 'lifetime updates', tip: 'Bussli.io', b: false, s: false, p: false },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true },
  { f: 'commercial license', tip: 'Bussli.io', b: true, s: true, p: true }
]
