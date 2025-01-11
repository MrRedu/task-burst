import { Monitor, MoonStar, Sun } from 'lucide-react'

import { Button } from './Button'

interface ThemeSwitcherProps {
  size?: 'sm' | 'md' | 'lg'
}

export const ThemeSwitcher = ({ size = 'lg' }: ThemeSwitcherProps) => {
  return (
    <div className="flex w-full items-center gap-2">
      <Button aria-label="Toggle light mode" className="w-full">
        <Sun size={size === 'sm' ? 16 : size === 'md' ? 24 : 32} />
      </Button>
      <Button aria-label="Toggle system mode" className="w-full">
        <Monitor size={size === 'sm' ? 16 : size === 'md' ? 24 : 32} />
      </Button>
      <Button aria-label="Toggle dark mode" className="w-full">
        <MoonStar size={size === 'sm' ? 16 : size === 'md' ? 24 : 32} />
      </Button>
    </div>
  )
}
