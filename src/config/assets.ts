const getSvg = (path: string) => `/assets/svg/${path}.svg`
const iterateDirectory = (n: number, path: string, extension = 'avif') =>
  [...Array.from({ length: n }).keys()].map((index) => `/assets/${path}${index + 1}.${extension}`)

const p = {
  /** IMAGES */
  brands: `brands/`,
  skilledPeople: `skilledPeople/`,
  teamAvatars: `teamAvatars/`,
  testimonials: `testimonials/`,
  other: `/assets/other/`,

  /** SVG */
  icons: `icons/`,
  colorfulIcons: `icons/colorfulIcons/`,
  company: `icons/company/`,

  illustrations: `illustrations/`
}

const images = {
  /** itareted images */
  brands: iterateDirectory(4, p.brands, 'avif'),
  skilledPeople: iterateDirectory(4, p.skilledPeople, 'avif'),
  teamAvatars: iterateDirectory(7, p.teamAvatars, 'avif'),
  testimonials: iterateDirectory(1, p.testimonials, 'avif'),

  other: {
    darkHairFemale: `${p.other}dark-hair-female.avif`,
    heroOvalFemale: `${p.other}hero-oval-female.avif`,
    orangeBgMale: `${p.other}orange-bg-male.avif`,
    team: `${p.other}team.avif`
  }
}

const svg = {
  icons: {
    colorfulIcons: {
      chat: getSvg(`${p.colorfulIcons}chat`),
      clock: getSvg(`${p.colorfulIcons}clock`),
      layers: getSvg(`${p.colorfulIcons}layers`),
      personComputer: getSvg(`${p.colorfulIcons}personComputer`)
    },
    company: {
      company: getSvg(`${p.company}company`)
    },
    alignLeft: getSvg(`${p.icons}alignLeft`)
  },

  illustrations: {
    designerLife: getSvg(`${p.illustrations}designerLife`),
    imageViewer: getSvg(`${p.illustrations}imageViewer`),
    proudCoder: getSvg(`${p.illustrations}proudCoder`),
    notFound: getSvg(`${p.illustrations}not-found`)
  }
}

const assets = { images, svg }

export { assets }
