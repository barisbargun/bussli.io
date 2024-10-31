import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderNav
} from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'

export const PricingRoute = () => {
  return (
    <>
      {/** Home */}
      <PageSection
        className="pageGradient"
        nestedClassName="min-h-screen"
        spaceType="MainFirstPage"
      >
        <PageHeader>
          <PageHeaderNav>Let’s shift your business</PageHeaderNav>
          <PageHeaderHeading>Shift your business fast with Bussli!</PageHeaderHeading>
          <PageHeaderDescription>
            Easily create a consultancy website in minutes with unique, code-free blocks.
          </PageHeaderDescription>
        </PageHeader>
      </PageSection>
    </>
  )
}
