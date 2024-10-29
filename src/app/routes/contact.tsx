import { PageHeader, PageHeaderHeading } from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'
import { contactConfig } from '@/config/contact'
import { ContactForm } from '@/features/contact/components/contact-form'
import ContactInfo from '@/features/contact/components/contact-info'

export const ContactRoute = () => {
  return (
    <PageSection className="pageGradient" spaceType="FirstPage">
      <PageHeader center>
        <PageHeaderHeading>Get in touch</PageHeaderHeading>
      </PageHeader>
      <div className="firstContentSpacing mx-auto flex gap-16 max-sm:flex-col sm:justify-center sm:max-lg:flex-wrap lg:w-full lg:justify-between lg:px-4">
        {Object.values(contactConfig).map((v, index) => (
          <ContactInfo {...v} key={index} />
        ))}
      </div>
      <ContactForm className="mt-12 px-1 max-lg:mx-auto max-lg:max-w-[40rem] lg:bg-white lg:p-10" />
    </PageSection>
  )
}
