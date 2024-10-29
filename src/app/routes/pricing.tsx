import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CardPricingCompact } from '@/components/shared/cards/card-pricing-compact'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading
} from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'
import { AccordionFaq } from '@/components/shared/accordion-faq'
import { CompanyLogos } from '@/components/shared/companies'
import { ComparePricing } from '@/components/shared/compare-pricing'
import { Toggle } from '@/components/shared/toggle'
import { Accordion } from '@/components/ui/accordion'
import { faqsConfig } from '@/config/features/faqs'
import {
  PRICING_PACKAGE_DISCOUNT,
  PRICING_PACKAGE_FEATURES,
  PRICING_PACKAGES
} from '@/config/features/pricing/base'
import { pricingComparePlansConfig } from '@/config/features/pricing/compare-plans'
import { pricingFeaturesConfig } from '@/config/features/pricing/features'

export const PricingRoute = () => {
  const [checked, setChecked] = useState(true)
  return (
    <>
      {/** Main */}
      <PageSection className="pageGradient" nestedClassName="min-h-screen" spaceType="FirstPage">
        <PageHeader center>
          <PageHeaderHeading>Pay Once, use forever!</PageHeaderHeading>
          <PageHeaderDescription>
            Get started with Bussli.io - Web development app today and experience the power of our
            tools!
          </PageHeaderDescription>
        </PageHeader>
        <Toggle
          checked={checked}
          className="firstContentSpacing"
          discount={PRICING_PACKAGE_DISCOUNT}
          setChecked={setChecked}
        />

        <ul className="mt-10 flex justify-center gap-8 max-lg:flex-wrap lg:justify-between 2xl:gap-12">
          {pricingFeaturesConfig.map((v, index) => (
            <CardPricingCompact
              key={v.cost}
              cost={v.cost}
              discount={PRICING_PACKAGE_DISCOUNT}
              featureCount={v.featureCount}
              featureList={PRICING_PACKAGE_FEATURES}
              fillColor={index === 2}
              isCreditCardRequire={v.isCreditCardRequire}
              isMonthly={!checked}
              to={v.to}
              type={v.type}
            />
          ))}
        </ul>
        <CompanyLogos className="unrelatedContentSpacing w-full" />
      </PageSection>

      {/** Compare plans */}
      <PageSection className="pageGradient">
        <PageHeader center>
          <PageHeaderSubHeading>Compare plans & features</PageHeaderSubHeading>
        </PageHeader>
        <article className="firstContentSpacing flex w-full flex-col gap-10 overflow-hidden max-lg:!overflow-x-scroll max-lg:pb-4 lg:gap-7">
          <ComparePricing
            b={Object.keys(PRICING_PACKAGES)[0]}
            f="Features"
            isTitle={true}
            p={Object.keys(PRICING_PACKAGES)[2]}
            s={Object.keys(PRICING_PACKAGES)[1]}
            tip=""
          />
          {pricingComparePlansConfig.map((f, index) => (
            <ComparePricing key={index} {...f} />
          ))}
        </article>
      </PageSection>

      {/** Faqs */}
      <PageSection className="pageGradient">
        <PageHeader center>
          <PageHeaderSubHeading>Frequently Asked Questions</PageHeaderSubHeading>
          <PageHeaderDescription>
            Get started with Bussli.io - Web development app today and experience the power of our
            tools!
          </PageHeaderDescription>
        </PageHeader>
        <Accordion
          collapsible
          className="firstContentSpacing flex flex-col gap-3"
          defaultValue="0"
          type="single"
        >
          {faqsConfig.map((v, index) => (
            <AccordionFaq key={index} a={v.a} index={index} q={v.q} />
          ))}
        </Accordion>
        <div className="mt-10 text-center text-lg tracking-tight">
          <p className="inline">Haven’t got your answer?</p>
          <Link
            className="ml-2 text-indigo-600 hover:text-indigo-500 active:text-indigo-400"
            to="#"
          >
            Contact our support now
          </Link>
        </div>
      </PageSection>
    </>
  )
}
