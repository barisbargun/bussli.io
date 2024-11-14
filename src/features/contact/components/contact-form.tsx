import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import { contactSchema } from '../lib/validations'
import { Button } from '@/components/ui/button'

type Props = React.HTMLAttributes<HTMLFormElement>

export const ContactForm = ({ className, ...props }: Props) => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  })

  async function onSubmit(_values: z.infer<typeof contactSchema>) {
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        className={cn(
          'flex w-full flex-wrap justify-center gap-10 [&>div]:w-full lg:[&>div]:w-[calc(50%-1.25rem)]',
          className
        )}
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">First & Last Name</FormLabel>
              <FormControl>
                <Input
                  autoComplete="no"
                  className="max-lg:h-14"
                  {...field}
                  placeholder="i.e. John Doe"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="no"
                  className="max-lg:h-14"
                  {...field}
                  placeholder="i.e. john@mail.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Phone number</FormLabel>
              <FormControl>
                <Input
                  autoComplete="no"
                  className="max-lg:h-14"
                  {...field}
                  placeholder="i.e. +1-234-567-7890"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Subject</FormLabel>
              <FormControl>
                <Input
                  autoComplete="no"
                  className="max-lg:h-14"
                  {...field}
                  placeholder="i.e. I need a help"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="!w-full">
              <FormLabel className="font-bold">Message</FormLabel>
              <FormControl>
                <Textarea
                  autoComplete="no"
                  rows={6}
                  {...field}
                  placeholder="Type your message here"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='px-20' variant="indigo" size='xl' type="submit">
          Send
        </Button>
      </form>
    </Form>
  )
}
