import { PageSection } from '@/components/global/page-section'
import { assets } from '@/config/assets'

export const NotFoundRoute = () => {
  return (
    <PageSection nestedClassName="min-h-screen items-center justify-center">
      <img alt="not-found" className="w-full max-w-4xl" src={assets.svg.illustrations.notFound} />
    </PageSection>
  )
}
