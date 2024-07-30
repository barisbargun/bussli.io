const pricingPackages = {
  packages: {
    basic: 23,
    standart: 59,
    premium: 89,
  },
  discount: 45
}

const packages = pricingPackages.packages;


/**
 * 
 * PAGE TITLES
 * 
 */
const main = {
  title: "Pay Once, use forever!",
  desc: "Get started with Bussli.io - Web development app today and experience the power of our tools!",
  packageFeatures: [
    "Commercial License",
    "100+ HTML UI Elements",
    "01 Domain Support",
    "6 Month Premium Support",
    "Lifetime Updates"
  ],
  packages: [
    {
      type: "basic",
      cost: packages.basic,
      featureCount: 3,
      isCreditCardRequire: false,
      to: ""
    },
    {
      type: "standart",
      cost: packages.standart,
      featureCount: 4,
      isCreditCardRequire: false,
      to: ""
    },
    {
      type: "premium",
      cost: packages.premium,
      featureCount: 5,
      isCreditCardRequire: false,
      to: ""
    }
  ]
}

const comparePlans = {
  title: "Compare plans & features",
  features: [
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "live support", tip: "Bussli.io", b: false, s: "Email", p: "1-1 support" },
    { f: "lifetime updates", tip: "Bussli.io", b: false, s: false, p: false },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
    { f: "commercial license", tip: "Bussli.io", b: true, s: true, p: true },
  ] as { f: string, tip: string, b: any, s: any, p: any }[],
}

const faq = {
  title: "Frequently Asked Questions",
  desc: "Get started with Bussli.io - Web development app today and experience the power of our tools!",
  faqs: [
    {
      q: "Can I use Bussli for my clients?",
      a: "Effortlessly create your next landing page with unique, code-free blocks. Create your next landing page effortlessly with unique, code-free blocks.",
      to: "",
    },
    {
      q: "Can I use Bussli for my clients?",
      a: "Effortlessly create your next landing page with unique, code-free blocks. Create your next landing page effortlessly with unique, code-free blocks.",
      to: "",
    },
    {
      q: "Can I use Bussli for my clients?",
      a: "Effortlessly create your next landing page with unique, code-free blocks. Create your next landing page effortlessly with unique, code-free blocks.",
      to: "",
    },
    {
      q: "Can I use Bussli for my clients?",
      a: "Effortlessly create your next landing page with unique, code-free blocks. Create your next landing page effortlessly with unique, code-free blocks.",
      to: "",
    }
  ],
  cta: {
    title: "Haven’t got your answer?",
    link: {
      title: "Contact our support now",
      to: ""
    }
  }
}

export default { pricingPackages, main, comparePlans, faq }