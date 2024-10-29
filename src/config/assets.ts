const getSvg = (path: string) => `/assets/svg/${path}.svg`
const iterateDir = (n: number, path: string, extension = 'avif') =>
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
  brands: iterateDir(4, p.brands, 'jpg'),
  skilledPeople: iterateDir(4, p.skilledPeople, 'jpg'),
  teamAvatars: iterateDir(7, p.teamAvatars, 'jpg'),
  testimonials: iterateDir(1, p.testimonials, 'png'),

  other: {
    darkHairFemale: `${p.other}dark-hair-female.png`,
    heroOvalFemale: `${p.other}hero-oval-female.png`,
    orangeBgMale: `${p.other}orange-bg-male.png`,
    team: `${p.other}team.jpg`
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
    proudCoder: getSvg(`${p.illustrations}proudCoder`)
  }
}

const assets = { images, svg }

export { assets }
