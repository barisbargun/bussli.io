import { useMemo } from 'react'

import splitIntoChucks from '@/utils/chucks'

type Props = {
  title: string
  list?: string[]
  address?: string
  icon: React.ElementType
}

const ContactInfo = ({ title, list, address, icon: Icon }: Props) => {
  const Description = ({ children }: { children: React.ReactNode }) => {
    return <p className="pb-1 opacity-70 last:pb-0 max-lg:text-2xl">{children}</p>
  }

  const descList = useMemo(
    () => list ?? (address ? splitIntoChucks(address, 3) : []),
    [list, address]
  )

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <div className="flex gap-2">
        <Icon className="size-8 text-indigo-600 lg:size-6" />
        <h3 className="mb-1 text-2xl font-bold lg:text-xl">{title}</h3>
      </div>
      <div>{descList?.map((item, index) => <Description key={index}>{item}</Description>)}</div>
    </div>
  )
}

export default ContactInfo
