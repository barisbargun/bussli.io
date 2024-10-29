import validator from 'validator'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(5, { message: 'You should enter at least 5 characters' }).max(2200),
  email: z.string().min(5, { message: 'You should enter at least 5 characters' }).max(2200),
  phone: z.string().refine(validator.isMobilePhone),
  subject: z.string().min(5, { message: 'You should enter at least 5 characters' }).max(2200),
  message: z.string().min(20, { message: 'You should enter at least 20 characters' }).max(2200)
})

export { contactSchema }
