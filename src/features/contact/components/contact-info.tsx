import { ContactConfig } from '@/config/contact'

export const ContactInfo = ({ title, values, icon: Icon }: ContactConfig) => {
  const Description = ({ children }: { children: React.ReactNode }) => {
    return (
      <p className="max-w-80 text-balance pb-1 opacity-70 last:pb-0 max-md:text-xl md:max-w-40">
        {children}
      </p>
    )
  }

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div className="flex items-center gap-2">
        <Icon className="size-12 text-indigo-600 md:size-6" />
        <h3 className="mb-1 text-3xl font-semibold md:text-2xl md:font-bold lg:text-xl">{title}</h3>
      </div>
      {typeof values === 'string' ? (
        <Description>{values}</Description>
      ) : (
        values.map((value, index) => <Description key={index}>{value}</Description>)
      )}
    </div>
  )
}