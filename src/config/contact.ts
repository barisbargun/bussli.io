import { Mail, MapPin, PhoneCall } from 'lucide-react'

type Categories = 'phone' | 'email' | 'location'
export interface ContactConfig {
  icon: any
  title: string
  values: string | string[]
}

export const contactConfig: Record<Categories, ContactConfig> = {
  phone: {
    icon: PhoneCall,
    title: 'Call us',
    values: ['+1-555-555-5555', '+1-333-333-3333']
  },
  email: {
    icon: Mail,
    title: 'Email us',
    values: ['support@bussli.io', 'contact@bussli.io']
  },
  location: {
    icon: MapPin,
    title: 'Visit us',
    values: '123 Maple Street Springfield, IL 62701'
  }
}
