import { H4, Small } from '@/components/ui/typography'
import { ContactConfig } from '@/config/contact'

export const ContactInfo = ({ title, values, icon: Icon }: ContactConfig) => {
  const Description = ({ children }: { children: React.ReactNode }) => {
    return (
      <Small className="max-w-80 text-balance text-muted-foreground max-md:text-lg md:max-w-40">
        {children}
      </Small>
    )
  }

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div className="flex items-center gap-2">
        <Icon className="size-8 text-primary md:size-6" />
        <H4 as="h2" className="mb-1 max-xl:text-lg">
          {title}
        </H4>
      </div>
      {typeof values === 'string' ? (
        <Description>{values}</Description>
      ) : (
        values.map((value, index) => <Description key={index}>{value}</Description>)
      )}
    </div>
  )
}
