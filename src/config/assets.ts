const getSvg = (path: string) => `/assets/svg/${path}.svg`;
const itarateDir = (n: number, path: string, ext = "avif") => [...Array(n).keys()].map((i) => `/assets/${path}${i + 1}.${ext}`);

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

  illustrations: `illustrations/`,
}

const images = {
  /** itareted images */
  brands: itarateDir(4, p.brands, "jpg"),
  skilledPeople: itarateDir(4, p.skilledPeople, "jpg"),
  teamAvatars: itarateDir(7, p.teamAvatars, "jpg"),
  testimonials: itarateDir(1, p.testimonials, "png"),

  other: {
    darkHairFemale: `${p.other}dark-hair-female.png`,
    heroOvalFemale: `${p.other}hero-oval-female.png`,
    orangeBgMale: `${p.other}orange-bg-male.png`,
    team: `${p.other}team.jpg`,
  }
}

const svg = {
  icons: {
    colorfulIcons: {
      chat: getSvg(`${p.colorfulIcons}chat`),
      clock: getSvg(`${p.colorfulIcons}clock`),
      layers: getSvg(`${p.colorfulIcons}layers`),
      personComputer: getSvg(`${p.colorfulIcons}personComputer`),
    },
    company: {
      company: getSvg(`${p.company}company`),
    },
    alignLeft: getSvg(`${p.icons}alignLeft`),
  },

  illustrations: {
    designerLife: getSvg(`${p.illustrations}designerLife`),
    imageViewer: getSvg(`${p.illustrations}imageViewer`),
    proudCoder: getSvg(`${p.illustrations}proudCoder`),
  },
}

export default { images, svg };