import { Mail, MapPin, PhoneCall } from 'lucide-react'

export interface ContactConfig {
  phone: {
    icon: any
    title: string
    list: string[]
  }
  email: {
    icon: any
    title: string
    list: string[]
  }
  location: {
    icon: any
    title: string
    address: string
  }
}

export const contactConfig: ContactConfig = {
  phone: {
    icon: PhoneCall,
    title: 'Call us',
    list: ['+1-555-555-5555', '+1-333-333-3333']
  },
  email: {
    icon: Mail,
    title: 'Email us',
    list: ['support@bussli.io', 'contact@bussli.io']
  },
  location: {
    icon: MapPin,
    title: 'Visit us',
    address: '123 Maple Street Springfield, IL 62701'
  }
}
