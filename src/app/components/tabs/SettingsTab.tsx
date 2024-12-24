import { Monitor, MoonStar, Sun } from 'lucide-react'

import { Card } from '../Card'
import { Switch } from '../ui/Switch'

const ThemeButton = ({
  ariaLabel,
  children,
}: {
  ariaLabel: string
  children: React.ReactNode
}) => {
  return (
    <button aria-label={ariaLabel} className="rounded-full bg-slate-500/20 p-6">
      {children}
    </button>
  )
}

export const SettingsTab = () => {
  return (
    <section className="flex h-full w-full flex-col gap-4 p-4 text-c-snow">
      <header className="flex items-center text-center">
        <h3 className="text-md w-full text-center font-bold">Settings</h3>
      </header>
      <Card className="flex flex-col gap-6">
        <h4 className="text-md">Theme</h4>
        <div className="flex w-full justify-center gap-4">
          <ThemeButton ariaLabel="Light Theme">
            <Sun size={32} />
          </ThemeButton>
          <ThemeButton ariaLabel="System Theme">
            <Monitor size={32} />
          </ThemeButton>
          <ThemeButton ariaLabel="Dark Theme">
            <MoonStar size={32} />
          </ThemeButton>
        </div>
      </Card>
      <Card className="flex flex-col gap-6">
        <h4 className="text-md">Hours</h4>
        <div className="flex w-full items-center justify-center gap-4">
          12h
          <Switch />
          24h
        </div>
      </Card>
    </section>
  )
}
