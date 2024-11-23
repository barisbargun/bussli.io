import { Helmet } from '@/components/global/helmet'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from '@/components/global/page-header'
import { PageSection } from '@/components/global/page-section'
import { H3, P, Ul } from '@/components/ui/typography'

export const TermsRoute = () => {
  return (
    <>
      <Helmet title="Terms" />

      {/** Main */}
      <PageSection spaceType="FirstPage">
        <PageHeader center className="max-w-2xl text-pretty">
          <PageHeaderHeading>Terms & Conditions</PageHeaderHeading>
          <PageHeaderDescription>
            By accessing and placing an order with BussliTheme, you agree to be bound by the terms
            and conditions.
          </PageHeaderDescription>
        </PageHeader>
        <article className="content-space [&>h2]:mt-10">
          <P>
            By accessing and placing an order with Bussli, you agree to the terms and conditions in
            the Terms of Use below. These terms apply to the entire website and any communication
            between you and Bussli. Bussli is not liable for any direct, indirect, special,
            incidental, or consequential damages, including loss of data or profit, arising from the
            use or inability to use materials on this site, even if advised of the possibility. If
            using materials from this site results in the need for servicing, repair, or correction
            of equipment or data, you assume any associated costs. Bussli is not responsible for any
            outcomes from using our resources.
          </P>

          <H3 as="h2">License</H3>
          <P>
            By purchasing or downloading resource (“item” or “file”) you are being granted a license
            to use these files for specific uses under certain conditions.
          </P>

          <H3 as="h2">Security</H3>
          <Ul>
            <li>
              You have rights for royalty free use of our resources for any or all of your personal.
            </li>
            <li>You are not required to attribute or link to any of projects.</li>
            <li>
              We reserve the rights to change prices and revise the resources usage policy in any
              moment.
            </li>
          </Ul>

          <H3 as="h2">Embedded content from other websites</H3>
          <P>
            Articles on this site may contain embedded content such as videos, images, and articles.
            This embedded content functions just as it would if you visited the originating website.
          </P>
          <P>
            These external sites might collect your data, use cookies, integrate additional
            third-party tracking, and monitor your interaction with the embedded content, especially
            if you are logged into those sites.
          </P>

          <H3 as="h2">Changes about terms</H3>
          <P>
            If we change our terms of use, we will post those changes on this page. Registered users
            will receive an email outlining the changes.
          </P>
        </article>
      </PageSection>
    </>
  )
}
