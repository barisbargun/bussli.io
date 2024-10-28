import { motion } from 'framer-motion'

import MotionLayout from '@/components/layouts/motion'
import Companies from '@/components/others/companies'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderNav,
  PageHeaderSubHeading
} from '@/components/global/page-header'
import ButtonGetStarted from '@/components/shared/button-get-started'
import mainConfig from '@/config/pages/main'
import motions from '@/lib/motions'
import { cn } from '@/lib/utils'
import ServiceCard from '@/components/others/service-card'

const config = mainConfig.main
export const LandingRoute = () => {
  return (
    <MotionLayout
    // className="max-h-[1200px] sm:max-lg:h-fit sm:max-lg:pb-10"
    // page="MainFirstPage"
    // secondClassName="lg:justify-between max-lg:gap-[4.5rem] pb-4 lg:pb-10 2xl:pb-16 max-h-[70rem]"
    >
      {/** Home */}
      <section className="pageGradient flex justify-center">
        <div className="mainFirstPageSpacing flex h-screen flex-col">
          <div className="flex justify-between gap-5">
            <motion.div
              className="flex max-w-[33.8rem] flex-col gap-5 lg:gap-7"
              variants={motions.fadeIn({ direction: 'left' })}
            >
              <PageHeader className="text-left">
                <PageHeaderNav>Let’s shift your business</PageHeaderNav>
                <PageHeaderHeading>Shift your business fast with Bussli!</PageHeaderHeading>
                <PageHeaderDescription>
                  Easily create a consultancy website in minutes with unique, code-free blocks.
                </PageHeaderDescription>
              </PageHeader>
              <ButtonGetStarted />
            </motion.div>

            <motion.div
              className="absolute size-80 max-md:-right-[1.19rem] max-md:bottom-[2.92rem] lg:relative xl:size-[22.65rem]"
              variants={motions.fadeIn({ direction: 'right' })}
            >
              <img
                alt="female-img-oval"
                className="relative z-10 w-full rounded-full max-md:hidden"
                loading="lazy"
                src={config.img}
              />
              <config.shape
                className={cn(
                  'absolute bottom-0 right-0 size-[20rem] max-md:opacity-5 lg:-bottom-[1rem] lg:size-[10rem] 2xl:-bottom-[2rem] 2xl:size-[12rem]'
                )}
              />
            </motion.div>
          </div>

          <Companies className="mb-20 mt-auto" />
        </div>
      </section>

      {/** Services */}
      <section className="flex justify-center">
        <div className="pageSpacing flex h-screen flex-col">
          <PageHeader className="text-left">
            <PageHeaderNav>Our Services</PageHeaderNav>
            <PageHeaderSubHeading>
              We offer exceptional, needs-based services for our customers.
            </PageHeaderSubHeading>
          </PageHeader>
          <div className="firstContentSpacing z-10 flex w-full justify-between gap-10 text-white max-lg:flex-wrap max-lg:px-8 max-sm:px-16">
            {mainConfig.services.cards.map((card) => (
              <ServiceCard key={card.title} card={card} />
            ))}
          </div>
          <div className="relative">
            <config.shape className="absolute -bottom-[4.6rem] right-0 w-[19.6rem] lg:-right-6 xl:-right-10" />
          </div>
        </div>
      </section>
    </MotionLayout>
  )
}
