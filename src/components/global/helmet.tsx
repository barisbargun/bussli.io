import { Helmet as ReactHelmet, HelmetData } from 'react-helmet-async'

type HeadProps = {
  title?: string
  description?: string
}

const helmetData = new HelmetData({})

export const Helmet = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <ReactHelmet defaultTitle="Bussli.io" helmetData={helmetData} title={title ?? undefined}>
      <meta content={description} name="description" />
    </ReactHelmet>
  )
}
