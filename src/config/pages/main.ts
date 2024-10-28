import OctagonIcon from '@/components/icons/octagon'
import RectangleIcon from '@/components/icons/rectangle'
import SquareIcon from '@/components/icons/square'

import assets from '../assets'
import { pricingPackages } from './pricing'

const packages = pricingPackages.packages

const main = {
  nav: 'Let’s shift your business',
  title: 'Shift your business fast with Bussli!',
  desc: 'Easily create a consultancy website in minutes with unique, code-free blocks.',
  img: assets.images.other.heroOvalFemale,
  shape: OctagonIcon
}

const services = {
  nav: 'Our Services',
  title: 'We offer exceptional, needs-based services for our customers.',
  shape: RectangleIcon,
  cards: [
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
}

const testimonials = [
  {
    stars: 5,
    title:
      'OMG! I cannot believe that I have got a brand new landing page after getting Bussli. It was super easy to edit and publish.',
    user: 'Franklin Hicks',
    job: 'Web Developer',
    img: assets.images.testimonials[0]
  },
  {
    stars: 3,
    title:
      'OMG! I cannot believe that I have got a brand new landing page after getting Bussli. It was super easy to edit and publish.',
    user: 'Franklin Hicks',
    job: 'Web Developer',
    img: assets.images.testimonials[0]
  },
  {
    stars: 3,
    title:
      'OMG! I cannot believe that I have got a brand new landing page after getting Bussli. It was super easy to edit and publish.',
    user: 'Franklin Hicks',
    job: 'Web Developer',
    img: assets.images.testimonials[0]
  },
  {
    stars: 3,
    title:
      'OMG! I cannot believe that I have got a brand new landing page after getting Bussli. It was super easy to edit and publish.',
    user: 'Franklin Hicks',
    job: 'Web Developer',
    img: assets.images.testimonials[0]
  }
]

const story = {
  nav: 'Our Story',
  title: 'We understand the root causes of your business struggles and how to fix them.',
  desc: 'We share trends and strategies to boost your rental income and ensure high demand. Easily create a landing page with unique, code-free blocks.',
  leftImg: assets.images.other.darkHairFemale,
  rightImg: assets.images.other.orangeBgMale,
  shape: OctagonIcon,
  features: [
    {
      title: '1M+',
      desc: 'Customers visit Omega every month to get their service done.'
    },
    {
      title: '97%',
      desc: 'Satisfaction rate comes from our awesome customers.'
    },
    {
      title: '4.9/5.0',
      desc: 'Average customer ratings we have got all over internet.'
    }
  ]
}

const choose = {
  nav: 'Why choose us',
  title: 'People choose us because we serve the best for everyone',
  shape: SquareIcon,
  features: [
    {
      title: 'Dedicated project manager',
      desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
      icon: assets.svg.icons.colorfulIcons.personComputer,
      iconColor: 'bg-indigo-600/10'
    },
    {
      title: 'Organized tasks',
      desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
      icon: assets.svg.icons.colorfulIcons.layers,
      iconColor: 'bg-red-600/10'
    },
    {
      title: 'Easy feedback sharing',
      desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
      icon: assets.svg.icons.colorfulIcons.chat,
      iconColor: 'bg-lime-600/10'
    },
    {
      title: 'Never miss deadline',
      desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
      icon: assets.svg.icons.colorfulIcons.clock,
      iconColor: 'bg-slate-600/10'
    }
  ]
}

const studies = {
  nav: 'Case studies',
  title: "Our work showcases why we're the best in the business",
  link: {
    title: 'See all works',
    to: ''
  },
  productImages: assets.images.brands,
  products: [
    {
      nav: 'Graphic Design',
      title: 'Lorem Branding Design'
    },
    {
      nav: 'Web Development',
      title: 'Gradient Website Development'
    },
    {
      nav: 'Graphic Design',
      title: 'Yogurt Snack Packaging'
    },
    {
      nav: 'Content Writing',
      title: 'Magazine Content Writing'
    }
  ]
}

const pricing = {
  title: 'Pricing & Plans',
  desc: 'Effortlessly create your next landing page with unique, code-free blocks.',
  packages: [
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
}

const mainConfig = {
  main,
  services,
  testimonials,
  story,
  choose,
  studies,
  pricing
}

export default mainConfig
