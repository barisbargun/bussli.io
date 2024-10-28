import FacebookIcon from '@/components/icons/facebook'
import InstagramIcon from '@/components/icons/instagram'
import LinkedinIcon from '@/components/icons/linkedin'
import TwitterIcon from '@/components/icons/twitter'

export interface FooterConfig {
  desc: string
  socialMedia: {
    icon: any
    to: string
  }[]
  links: {
    title: string
    items: {
      title: string
      to: string
    }[]
  }[]
}

export const footerConfig: FooterConfig = {
  desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
  socialMedia: [
    {
      icon: TwitterIcon,
      to: ''
    },
    {
      icon: FacebookIcon,
      to: ''
    },
    {
      icon: InstagramIcon,
      to: ''
    },
    {
      icon: LinkedinIcon,
      to: ''
    }
  ],
  links: [
    {
      title: 'Company',
      items: [
        {
          title: 'About us',
          to: ''
        },
        {
          title: 'Contact us',
          to: ''
        },
        {
          title: 'Careers',
          to: ''
        },
        {
          title: 'Press',
          to: ''
        }
      ]
    },
    {
      title: 'Product',
      items: [
        {
          title: 'Features',
          to: ''
        },
        {
          title: 'Pricing',
          to: ''
        },
        {
          title: 'News',
          to: ''
        },
        {
          title: 'Help desk',
          to: ''
        },
        {
          title: 'Support',
          to: ''
        }
      ]
    },
    {
      title: 'Services',
      items: [
        {
          title: 'Digital Marketing',
          to: ''
        },
        {
          title: 'Content Writing',
          to: ''
        },
        {
          title: 'SEO for Business',
          to: ''
        },
        {
          title: 'UI Design',
          to: ''
        }
      ]
    },
    {
      title: 'Legal',
      items: [
        {
          title: 'Privacy Policy',
          to: ''
        },
        {
          title: 'Terms & Conditions',
          to: ''
        },
        {
          title: 'Return Policy',
          to: ''
        }
      ]
    }
  ]
}
