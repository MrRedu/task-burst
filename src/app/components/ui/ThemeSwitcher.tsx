import { Monitor, MoonStar, Sun } from 'lucide-react'

import { AnimatedBackground } from './AnimatedBackground'

interface ThemeSwitcherProps {
  size?: 'sm' | 'md' | 'lg'
}

const THEMES = [
  {
    label: 'Light',
    value: 'light',
    icon: Sun,
  },
  {
    label: 'System',
    value: 'system',
    icon: Monitor,
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: MoonStar,
  },
]

export const ThemeSwitcher = ({ size = 'md' }: ThemeSwitcherProps) => {
  return (
    <div className="flex w-full items-center gap-2 rounded-xl bg-c-woodsmoke p-2">
      <AnimatedBackground
        // value={theme.value}
        className={`flex h-auto w-full items-center justify-center rounded-lg bg-c-space`}
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
        }}
        onValueChange={dataIdSelected => {
          console.log(`Theme switched to ${dataIdSelected}`)
        }}
      >
        {THEMES.map((theme, index) => (
          <button
            key={index}
            data-id={theme.label}
            type="button"
            aria-label={`Toggle ${theme.label} mode`}
            className="flex h-auto w-full items-center justify-center gap-2 rounded-lg p-2.5 hover:bg-c-space/50"
          >
            <theme.icon size={size === 'sm' ? 16 : size === 'md' ? 24 : 32} />
          </button>
        ))}
      </AnimatedBackground>
    </div>
  )
}
