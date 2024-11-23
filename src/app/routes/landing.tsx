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
import { CardBasic } from '@/components/shared/cards/basic'
import { CardPricing } from '@/components/shared/cards/pricing'
import { CardService } from '@/components/shared/cards/service'
import { CompanyLogos } from '@/components/shared/companies'
import { Faq } from '@/components/shared/faq'
import { HoverEffect } from '@/components/shared/hover-effect'
import { Product } from '@/components/shared/product'
import { Testimonial, TestimonialProvider } from '@/components/shared/testimonial'
import { Large } from '@/components/ui/typography'
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
        nestedClassName="min-h-[clamp(6.25rem,100vh,75rem)]"
        spaceType="MainFirstPage"
      >
        <div className="flex justify-between gap-5">
          <motion.div
            className="flex w-full flex-col gap-7 lg:max-w-80 xl:max-w-[33.8rem]"
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
            className="relative size-64 max-lg:hidden xl:size-72 2xl:size-80"
            variants={motions.fadeIn({ direction: 'right' })}
          >
            <img
              alt="female-img-oval"
              className="relative z-10 w-full rounded-full"
              src={assets.images.other.heroOvalFemale}
              width={420}
              height={420}
              {...({ fetchpriority: 'high' } as any)}
            />
            <OctagonIcon
              className={cn(
                'absolute -bottom-[1rem] right-0 size-[10rem] 2xl:-bottom-[2rem] 2xl:size-[12rem]'
              )}
            />
          </motion.div>
        </div>

        <CompanyLogos className="mb-10 mt-auto 2xl:mb-20" />
      </PageSection>

      {/** Services */}
      <PageSection>
        <PageHeader center variants={motions.fadeIn({})}>
          <PageHeaderNav>Our Services</PageHeaderNav>
          <PageHeaderSubHeading>
            We offer exceptional, needs-based services for our customers.
          </PageHeaderSubHeading>
        </PageHeader>
        <div className="z-10 flex w-full justify-between gap-10 text-white content-space max-lg:flex-wrap">
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
              className="mx-auto max-lg:max-w-sm"
            >
              <CardService
                key={card.title}
                img={
                  <img
                    alt="illustration"
                    width={200}
                    height={128}
                    className="h-20 xl:h-32"
                    src={card.illustration}
                    loading="lazy"
                  />
                }
                {...card}
              />
            </motion.div>
          ))}
        </div>
        <div className="relative mb-10 xl:mb-[4.6rem]">
          <RectangleIcon className="absolute -bottom-12 right-0 w-60 lg:-right-6 xl:-bottom-[4.6rem] xl:-right-10 xl:w-80" />
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
        <div className="flex justify-between gap-10 max-sm:flex-col sm:gap-2 lg:gap-48 xl:gap-64">
          <div className="relative flex-[0_0_43%] lg:flex-[0_0_42%] xl:flex-[0_0_38%]">
            <PageHeader variants={motions.fadeIn({})}>
              <PageHeaderNav>Our Story</PageHeaderNav>
              <PageHeaderSubHeading>
                We understand the root causes of your business struggles and how to fix them.
              </PageHeaderSubHeading>
            </PageHeader>
            <img
              alt="female-img"
              className="relative z-10 mt-8 w-8/12 lg:w-11/12 xl:w-full"
              loading="lazy"
              src={assets.images.other.darkHairFemale}
              width={425}
              height={458}
            />

            <OctagonIcon
              className="absolute -bottom-10 -left-4 size-28 xl:-left-10 xl:size-36"
              fill="#047857"
            />
          </div>

          <div className="relative">
            <img
              alt="male-img"
              className="ml-auto w-8/12 lg:w-11/12 xl:w-full"
              loading="lazy"
              src={assets.images.other.orangeBgMale}
              width={470}
              height={597}
            />
            <p className="pageDesc mt-7 italic max-lg:text-center lg:absolute lg:-left-28">
              We share trends and strategies to boost your rental income and ensure high demand.
              Easily create a landing page with unique, code-free blocks.
            </p>
          </div>
        </div>

        <div className="flex gap-[4.1rem] px-10 content-space-lg max-sm:flex-col sm:justify-between">
          {qualitiesConfig.map((v) => (
            <div className="flex flex-col items-center gap-4 text-center" key={v.title}>
              <h3 className="text-4xl font-bold tracking-tighter xl:text-5xl">{v.title}</h3>
              <Large className="font-medium text-muted-foreground">{v.desc}</Large>
            </div>
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
        <div className="grid max-w-3xl grid-cols-1 gap-12 content-space max-lg:text-center max-sm:px-8 sm:grid-cols-2 lg:gap-20 xl:max-w-4xl">
          {featuresConfig.map((v) => (
            <CardBasic
              {...v}
              key={v.title}
              className="max-lg:flex max-lg:flex-col max-lg:items-center"
            />
          ))}
        </div>

        <SquareIcon className="absolute -left-11 top-48 h-16 lg:-left-12 lg:top-44 lg:h-28" />
        <Cta className="content-space-lg" />
      </PageSection>

      {/** Studies */}
      <PageSection>
        <PageHeader center variants={motions.fadeIn({})}>
          <PageHeaderNav>Case studies</PageHeaderNav>
          <PageHeaderSubHeading>
            Our work showcases why we&apos;re the best in the business
          </PageHeaderSubHeading>
        </PageHeader>
        <div className="mt-12 flex justify-between gap-8 max-sm:flex-col sm:gap-14 xl:gap-24">
          <div className="flex flex-1 flex-col gap-8 sm:gap-14 lg:gap-14">
            <Product {...productsConfig[0]} size="long" />
            <Product {...productsConfig[1]} />
          </div>
          <div className="flex flex-1 flex-col gap-14 lg:gap-14">
            <Product {...productsConfig[2]} />
            <Product {...productsConfig[3]} size="long" />
          </div>
        </div>

        <Link
          className="relative m-auto gap-2 tracking-tighter text-primary flex-center content-space-lg"
          to=""
        >
          <Large>See all works</Large>
          <ArrowRightIcon className="size-5" />
          <HoverEffect light={false} />
        </Link>
      </PageSection>

      {/** Pricing */}
      <PageSection className="bg-primary">
        <PageHeader center className="text-white" variants={motions.fadeIn({})}>
          <PageHeaderSubHeading>Pricing & Plans</PageHeaderSubHeading>
          <PageHeaderDescription className="text-muted-foreground-2">
            Effortlessly create your next landing page with unique, code-free blocks.
          </PageHeaderDescription>
        </PageHeader>
        <div className="z-10 flex gap-12 content-space max-lg:flex-col max-lg:sm:justify-center lg:justify-between">
          {pricingPackagesConfig.map((card, index) => (
            <CardPricing key={index} className="mx-auto" {...card} />
          ))}
        </div>

        <div className="flex items-center justify-between gap-10 content-space-lg max-lg:flex-col">
          {faqsConfig.slice(0, 2).map((v, index) => (
            <Faq key={index} {...v} />
          ))}
        </div>

        <div className="rectangleGradient absolute -left-4 top-[6.5rem] h-[31.6rem] w-1/5 rounded-xl border-[3px] border-solid border-white/10 opacity-50"></div>
      </PageSection>
    </>
  )
}
