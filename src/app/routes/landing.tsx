import { motion } from 'framer-motion'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderNav,
  PageHeaderSubHeading
} from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'
import OctagonIcon from '@/components/icons/octagon'
import RectangleIcon from '@/components/icons/rectangle'
import { CompanyLogos } from '@/components/others/companies'
import ServiceCard from '@/components/others/service-card'
import { Testimonial, TestimonialProvider } from '@/components/others/testimonial'
import ButtonGetStarted from '@/components/shared/button-get-started'
import assets from '@/config/assets'
import { servicesConfig } from '@/config/features/services'
import { testimonialsConfig } from '@/config/features/testimonials'
import motions from '@/lib/motions'
import { cn } from '@/lib/utils'

export const LandingRoute = () => {
  return (
    <>
      {/** Home */}
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
            <PageHeader className="max-md:max-w-[80%]">
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
              src={config.img}
            />
            <config.shape
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
        <PageHeader className="mx-auto w-full text-center" variants={motions.fadeIn({})}>
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
              <ServiceCard key={card.title} card={card} />
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
            <PageHeader className="mx-auto w-full text-center" variants={motions.fadeIn({})}>
              <PageHeaderNav>Our Story</PageHeaderNav>
              <PageHeaderSubHeading>
                We understand the root causes of your business struggles and how to fix them.
              </PageHeaderSubHeading>
              <PageHeaderDescription>
                We share trends and strategies to boost your rental income and ensure high demand.
                Easily create a landing page with unique, code-free blocks.
              </PageHeaderDescription>
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
              {config.desc}
            </p>
          </div>
        </div>

        <div className="unrelatedContentSpacing flex gap-[4.1rem] px-10 max-sm:flex-col sm:justify-between">
          {config.features.map((v) => (
            <Feature key={v.title} {...v} />
          ))}
        </div>
      </PageSection>
    </>
  )
}
