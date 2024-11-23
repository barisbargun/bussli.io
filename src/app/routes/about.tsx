import { Helmet } from '@/components/global/helmet'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading
} from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'
import { ArrowLink } from '@/components/shared/buttons/arrow-link'
import { CardHoverImage } from '@/components/shared/cards/hover-image'
import { H2, P } from '@/components/ui/typography'
import { assets } from '@/config/assets'
import { teamConfig } from '@/config/features/team'

const skilledPeople = assets.images.skilledPeople

export const AboutRoute = () => {
  return (
    <>
      <Helmet title="About" />

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
          className="w-full rounded-xl content-space"
          src={assets.images.other.team}
          width={930}
          height={453}
          {...({ fetchpriority: 'high' } as any)}
        />
        <div className="flex justify-between gap-5 content-space-lg max-lg:flex-col lg:gap-20">
          <H2 className="max-sm:text-2xl sm:flex-[0_0_45%]">
            We are here to help customers achieve success.
          </H2>
          <div className="flex flex-auto flex-col gap-4 *:text-muted-foreground sm:*:text-lg">
            <P>
              We share trends and strategies to boost your rental income and keep you in high
              demand.
            </P>
            <P>
              We share trends and strategies to boost your rental income and keep you in high
              demand.
            </P>
          </div>
        </div>
      </PageSection>

      {/** Skilled coders */}
      <PageSection
        className="pageGradient"
        nestedClassName="items-center justify-between lg:flex-row"
      >
        <PageHeader className="max-lg:text-center max-md:mx-auto lg:max-w-sm xl:max-w-lg">
          <PageHeaderSubHeading>High skilled coders from worldwide.</PageHeaderSubHeading>
          <PageHeaderDescription>
            We share trends and strategies to boost your rental income and keep you in high demand.
            <br />
            <br />
            Get started with Bussli.io - Web development app today and experience the power of our
            tools! Get started with Bussli.io - Web development app today and experience the power
            of our tools!
          </PageHeaderDescription>
        </PageHeader>
        <div className="flex w-full gap-6 max-lg:content-space sm:w-[70vw] lg:w-[25rem] xl:w-[29rem]">
          <div className="flex h-full w-1/2 flex-col gap-6">
            {skilledPeople.slice(0, 2).map((source, index) => (
              <CardHoverImage
                key={index}
                alt={`skilled-people-${index + 1}`}
                src={source}
                width={225}
                height={273}
              />
            ))}
          </div>
          <div className="flex h-full w-1/2 flex-col gap-6 pt-16 lg:pt-9">
            {skilledPeople.slice(2, 4).map((source, index) => (
              <CardHoverImage
                key={index}
                alt={`skilled-people-${index + 1}`}
                src={source}
                width={225}
                height={273}
              />
            ))}
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
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 content-space sm:grid-cols-3 lg:grid-cols-4">
          {teamConfig.map((v, index) => (
            <CardHoverImage
              key={v.name}
              alt={`member-${index + 1}`}
              width={265}
              height={356}
              desc={v.role}
              {...v}
            />
          ))}
          <div className="size-full flex-center">
            <ArrowLink title="Join Us" to="#" />
          </div>
        </div>
      </PageSection>
    </>
  )
}
