import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading
} from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'
import { CardHoverImage } from '@/components/shared/cards/hover-image'
import { HoverEffect } from '@/components/shared/hover-effect'
import { assets } from '@/config/assets'
import { teamConfig } from '@/config/features/team'

const skilledPeople = assets.images.skilledPeople
export const AboutRoute = () => {
  return (
    <>
      {/** Main */}
      <PageSection spaceType="FirstPage">
        <PageHeader center>
          <PageHeaderHeading>Our story</PageHeaderHeading>
          <PageHeaderDescription>
            Get started with Bussli.io - Web development app today and experience the power of our
            tools!
          </PageHeaderDescription>
        </PageHeader>
        <img
          alt="team-img"
          className="firstContentSpacing w-full rounded-xl"
          loading="lazy"
          src={assets.images.other.team}
        />
        <div className="relatedContentSpacing flex justify-between gap-5 max-sm:flex-col sm:gap-20">
          <h2 className="text-4xl font-bold tracking-tight sm:flex-[0_0_45%]">
            We are here to help customers achieve success.
          </h2>
          <div className="flex flex-auto flex-col gap-6 *:text-lg *:leading-8 *:opacity-70">
            <p>
              We share trends and strategies to boost your rental income and keep you in high
              demand.
            </p>
            <p>
              We share trends and strategies to boost your rental income and keep you in high
              demand.
            </p>
          </div>
        </div>
      </PageSection>

      {/** Skilled coders */}
      <PageSection className="pageGradient" nestedClassName="flex-row items-center justify-between">
        <PageHeader className="max-w-xl">
          <PageHeaderSubHeading>High skilled coders from worldwide.</PageHeaderSubHeading>
          <PageHeaderDescription>
            We share trends and strategies to boost your rental income and keep you in high demand.
          </PageHeaderDescription>
          <PageHeaderDescription>
            Get started with Bussli.io - Web development app today and experience the power of our
            tools! Get started with Bussli.io - Web development app today and experience the power
            of our tools!
          </PageHeaderDescription>
        </PageHeader>
        <div className="max-lg:firstContentSpacing flex gap-6 lg:w-[25rem] xl:w-[29rem]">
          <div className="flex h-full w-1/2 flex-col gap-6">
            <CardHoverImage alt="skilled-people-1" img={skilledPeople[0]} />
            <CardHoverImage alt="skilled-people-2" img={skilledPeople[1]} />
          </div>
          <div className="flex h-full w-1/2 flex-col gap-6 pt-16 lg:pt-9">
            <CardHoverImage alt="skilled-people-3" img={skilledPeople[2]} />
            <CardHoverImage alt="skilled-people-4" img={skilledPeople[3]} />
          </div>
        </div>
      </PageSection>

      {/** Team members */}
      <PageSection>
        <PageHeader center>
          <PageHeaderSubHeading>Meet our team</PageHeaderSubHeading>
          <PageHeaderDescription>
            Get started with Bussli.io - Web development app today and experience the power of our
            tools!
          </PageHeaderDescription>
        </PageHeader>
        <div className="firstContentSpacing grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3 lg:grid-cols-4">
          {teamConfig.map((v, index) => (
            <CardHoverImage key={v.name} alt={`member-${index + 1}`} {...v} />
          ))}
          <div className="flex-center size-full">
            <Link className="flex-center relative gap-3 text-xl font-bold text-indigo-600" to="#">
              Join us
              <ArrowRight />
              <HoverEffect light={false} />
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  )
}
