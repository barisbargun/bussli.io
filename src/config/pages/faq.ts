export interface FaqConfig {
  title: string
  desc: string
  faqs: { q: string; a: string; to: string }[]
  cta: {
    title: string
    link: {
      title: string
      to: string
    }
  }
}

export const faqConfig: FaqConfig = {
  title: 'Frequently Asked Questions',
  desc: 'Get started with Bussli.io - Web development app today and experience the power of our tools!',
  faqs: [
    {
      q: 'Can I use Bussli for my clients?',
      a: 'Effortlessly create your next landing page with unique, code-free blocks. Create your next landing page effortlessly with unique, code-free blocks.',
      to: ''
    },
    {
      q: 'Can I use Bussli for my clients?',
      a: 'Effortlessly create your next landing page with unique, code-free blocks. Create your next landing page effortlessly with unique, code-free blocks.',
      to: ''
    },
    {
      q: 'Can I use Bussli for my clients?',
      a: 'Effortlessly create your next landing page with unique, code-free blocks. Create your next landing page effortlessly with unique, code-free blocks.',
      to: ''
    },
    {
      q: 'Can I use Bussli for my clients?',
      a: 'Effortlessly create your next landing page with unique, code-free blocks. Create your next landing page effortlessly with unique, code-free blocks.',
      to: ''
    }
  ],
  cta: {
    title: 'Haven’t got your answer?',
    link: {
      title: 'Contact our support now',
      to: ''
    }
  }
}
