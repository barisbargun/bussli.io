import { Helmet } from '@/components/global/helmet'
import { PageHeader, PageHeaderHeading } from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'
import {  contactConfig } from '@/config/contact'
import { ContactForm } from '@/features/contact/components/contact-form'
import { ContactInfo } from '@/features/contact/components/contact-info'

export const ContactRoute = () => {
  return (
    <>
      <Helmet title="Request a demo" />

      {/** Main */}
      <PageSection className="pageGradient" spaceType="FirstPage">
        <PageHeader center>
          <PageHeaderHeading>Get in touch</PageHeaderHeading>
        </PageHeader>
        <div className="flex flex-col max-md:flex-col-reverse">
          <div className="page-space mx-auto flex gap-16 max-sm:flex-col sm:justify-center sm:max-lg:flex-wrap lg:w-full lg:justify-between lg:px-4">
            {Object.values(contactConfig).map((v, index) => (
              <ContactInfo {...v} key={index} />
            ))}
          </div>
          <ContactForm className="mt-12 bg-white p-10 max-lg:mx-auto md:px-1" />
        </div>
      </PageSection>
    </>
  )
}
