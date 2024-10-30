import { Mail, MapPin, PhoneCall } from 'lucide-react'

export interface ContactConfig {
  title: string
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
  form: {
    label: string
    placeholder: string
    isTextArea: boolean
    name: string
  }[]
}

export const contactConfig: ContactConfig = {
  title: 'Get in touch',
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
  },
  form: [
    {
      label: 'First & Last Name',
      placeholder: 'i.e. John Doe',
      isTextArea: false,
      name: 'name'
    },
    {
      label: 'Email',
      placeholder: 'i.e. john@mail.com',
      isTextArea: false,
      name: 'email'
    },
    {
      label: 'Phone Number',
      placeholder: 'i.e. +1-234-567-7890',
      isTextArea: false,
      name: 'phone'
    },
    {
      label: 'Subject',
      placeholder: 'i.e. I need a help',
      isTextArea: false,
      name: 'subject'
    },
    {
      label: 'Message',
      placeholder: 'Type you message',
      isTextArea: true,
      name: 'message'
    }
  ]
}
