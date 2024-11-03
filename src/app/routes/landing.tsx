import { motion } from 'framer-motion'
import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Cta } from '@/components/global/cta'
import { Helmet } from '@/components/global/helmet'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderNav,
  PageHeaderSubHeading
} from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'
import { OctagonIcon } from '@/components/icons/octagon'
import { RectangleIcon } from '@/components/icons/rectangle'
import { SquareIcon } from '@/components/icons/square'
import { ButtonGetStarted } from '@/components/shared/buttons/get-started'
import { CardPricing } from '@/components/shared/cards/pricing'
import { CardService } from '@/components/shared/cards/service'
import { CompanyLogos } from '@/components/shared/companies'
import { Faq } from '@/components/shared/faq'
import { Feature } from '@/components/shared/feature'
import { HoverEffect } from '@/components/shared/hover-effect'
import { Product } from '@/components/shared/product'
import { Quality } from '@/components/shared/quality'
import { Testimonial, TestimonialProvider } from '@/components/shared/testimonial'
import { assets } from '@/config/assets'
import { faqsConfig } from '@/config/features/faqs'
import { featuresConfig } from '@/config/features/features'
import { pricingPackagesConfig } from '@/config/features/pricing/packages'
import { productsConfig } from '@/config/features/products'
import { qualitiesConfig } from '@/config/features/qualities'
import { servicesConfig } from '@/config/features/services'
import { testimonialsConfig } from '@/config/features/testimonials'
import { motions } from '@/lib/motions'
import { cn } from '@/lib/utils'

export const LandingRoute = () => {
  return (
    <>
      <Helmet />

      {/** Main */}
      <PageSection
        className="pageGradient"
        nestedClassName="min-h-screen"
        spaceType="MainFirstPage"
      >
        <div className="flex justify-between gap-5">
          <motion.div
            className="flex w-full flex-col gap-7 md:max-w-[33.8rem]"
            variants={motions.fadeIn({ direction: 'left' })}
          >
            <PageHeader>
              <PageHeaderNav>Let’s shift your business</PageHeaderNav>
              <PageHeaderHeading>Shift your business fast with Bussli!</PageHeaderHeading>
              <PageHeaderDescription>
                Easily create a consultancy website in minutes with unique, code-free blocks.
              </PageHeaderDescription>
            </PageHeader>
            <ButtonGetStarted />
          </motion.div>

          <motion.div
            className="relative size-80 max-md:hidden xl:size-[22.65rem]"
            variants={motions.fadeIn({ direction: 'right' })}
          >
            <img
              alt="female-img-oval"
              className="relative z-10 w-full rounded-full"
              loading="lazy"
              src={assets.images.other.heroOvalFemale}
            />
            <OctagonIcon
              className={cn(
                'absolute -bottom-[1rem] right-0 size-[10rem] 2xl:-bottom-[2rem] 2xl:size-[12rem]'
              )}
            />
          </motion.div>
        </div>

        <CompanyLogos className="mb-20 mt-auto" />
      </PageSection>

      {/** Services */}
      <PageSection>
        <PageHeader center variants={motions.fadeIn({})}>
          <PageHeaderNav>Our Services</PageHeaderNav>
          <PageHeaderSubHeading>
            We offer exceptional, needs-based services for our customers.
          </PageHeaderSubHeading>
        </PageHeader>
        <div className="firstContentSpacing z-10 flex w-full justify-between gap-10 text-white max-lg:flex-wrap max-lg:px-8 max-sm:px-16">
          {servicesConfig.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={motions.fadeIn({
                direction: 'left',
                duration: 0.5,
                directionAmount: 100,
                delay: 0.4
              })}
            >
              <CardService key={card.title} card={card} />
            </motion.div>
          ))}
        </div>
        <div className="relative mb-[4.6rem]">
          <RectangleIcon className="absolute -bottom-[4.6rem] right-0 w-[19.6rem] lg:-right-6 xl:-right-10" />
        </div>
      </PageSection>

      {/** Testimonials */}
      <PageSection className="pageGradient">
        <TestimonialProvider>
          {testimonialsConfig.map((v, index) => (
            <Testimonial {...v} key={index} />
          ))}
        </TestimonialProvider>
      </PageSection>

      {/** Stories */}
      <PageSection>
        <div className="flex justify-between gap-20 lg:gap-48 xl:gap-64">
          <div className="relative max-lg:flex-[0_0_43%] lg:flex-[0_0_42%] xl:flex-[0_0_38%]">
            <PageHeader variants={motions.fadeIn({})}>
              <PageHeaderNav>Our Story</PageHeaderNav>
              <PageHeaderSubHeading>
                We understand the root causes of your business struggles and how to fix them.
              </PageHeaderSubHeading>
            </PageHeader>
            <img
              alt="female-img"
              className="relative z-10 mt-8 w-full sm:mt-16"
              loading="lazy"
              src={assets.images.other.darkHairFemale}
            />

            <OctagonIcon
              className="absolute -bottom-10 size-36 max-lg:hidden lg:-left-6 xl:-left-10"
              fill="#047857"
            />
          </div>

          <div className="relative max-lg:flex-auto">
            <img
              alt="male-img"
              className=""
              loading="lazy"
              src={assets.images.other.orangeBgMale}
            />
            <p className="pageDesc absolute max-sm:pt-12 sm:pt-7 lg:-left-[7.1rem]">
              We share trends and strategies to boost your rental income and ensure high demand.
              Easily create a landing page with unique, code-free blocks.
            </p>
          </div>
        </div>

        <div className="unrelatedContentSpacing flex gap-[4.1rem] px-10 max-sm:flex-col sm:justify-between">
          {qualitiesConfig.map((v) => (
            <Quality key={v.title} {...v} />
          ))}
        </div>
      </PageSection>

      {/** Choose */}
      <PageSection className="pageGradient" nestedClassName="items-center">
        <PageHeader center variants={motions.fadeIn({})}>
          <PageHeaderNav>Why choose us</PageHeaderNav>
          <PageHeaderSubHeading>
            People choose us because we serve the best for everyone
          </PageHeaderSubHeading>
        </PageHeader>
        <div className="firstContentSpacing grid max-w-4xl grid-cols-2 gap-24 max-sm:px-8 lg:gap-20">
          {featuresConfig.map((v) => (
            <Feature {...v} key={v.title} />
          ))}
        </div>

        <SquareIcon className="absolute -left-[2.7rem] top-32 h-20 lg:-left-12 lg:top-[10.6rem] lg:h-[6.8rem]" />
        <Cta className="unrelatedContentSpacing" />
      </PageSection>

      {/** Studies */}
      <PageSection>
        <PageHeader center variants={motions.fadeIn({})}>
          <PageHeaderNav>Case studies</PageHeaderNav>
          <PageHeaderSubHeading>
            Our work showcases why we&apos;re the best in the business
          </PageHeaderSubHeading>
        </PageHeader>
        <div className="mt-[3.1rem] flex justify-between gap-[5.6rem]">
          <div className="flex flex-1 flex-col gap-14 lg:gap-[3.75rem]">
            <Product {...productsConfig[0]} size="long" />
            <Product {...productsConfig[1]} />
          </div>
          <div className="flex flex-1 flex-col gap-14 lg:gap-[3.75rem]">
            <Product {...productsConfig[2]} />

            <Product {...productsConfig[3]} size="long" />
          </div>
        </div>

        <Link
          className="relatedContentSpacing flex-center relative m-auto gap-2 text-lg font-bold tracking-[-1.2px] text-indigo-600"
          to=""
        >
          See all works
          <ArrowRightIcon className="size-5" />
          <HoverEffect light={false} />
        </Link>
      </PageSection>

      {/** Pricing */}
      <PageSection className="bg-indigo-600">
        <PageHeader center className="text-white" variants={motions.fadeIn({})}>
          <PageHeaderSubHeading>Pricing & Plans</PageHeaderSubHeading>
          <PageHeaderDescription>
            Effortlessly create your next landing page with unique, code-free blocks.
          </PageHeaderDescription>
        </PageHeader>
        <div className="firstContentSpacing z-10 flex gap-10 max-lg:flex-wrap max-sm:px-12 max-lg:sm:justify-center lg:justify-between">
          {pricingPackagesConfig.map((card, index) => (
            <CardPricing key={index} className="max-lg:sm:w-[calc(50%-1.25rem)]" {...card} />
          ))}
        </div>

        <div className="relatedContentSpacing flex justify-between gap-10 max-sm:flex-col">
          {faqsConfig.slice(0, 2).map((v, index) => (
            <Faq key={index} {...v} />
          ))}
        </div>

        <div className="rectangleGradient absolute -left-4 top-[6.5rem] h-[31.6rem] w-1/5 rounded-xl border-[3px] border-solid border-white/10 opacity-50"></div>
      </PageSection>
    </>
  )
}
