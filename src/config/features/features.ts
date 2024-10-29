import { assets } from "../assets"

export interface FeaturesConfig {
  title: string
  desc: string
  icon: string
  iconColor: string
}

export const featuresConfig: FeaturesConfig[] = [
  {
    title: 'Dedicated project manager',
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
    icon: assets.svg.icons.colorfulIcons.personComputer,
    iconColor: 'bg-indigo-600/10'
  },
  {
    title: 'Organized tasks',
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
    icon: assets.svg.icons.colorfulIcons.layers,
    iconColor: 'bg-red-600/10'
  },
  {
    title: 'Easy feedback sharing',
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
    icon: assets.svg.icons.colorfulIcons.chat,
    iconColor: 'bg-lime-600/10'
  },
  {
    title: 'Never miss deadline',
    desc: 'Create your next landing page effortlessly with unique, code-free blocks.',
    icon: assets.svg.icons.colorfulIcons.clock,
    iconColor: 'bg-slate-600/10'
  }
]
