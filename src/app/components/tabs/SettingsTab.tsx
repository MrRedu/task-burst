import { Moon, Sun, SunMoon } from 'lucide-react'

import { Card } from '../Card'

const ThemeButton = ({
  ariaLabel,
  children,
}: {
  ariaLabel: string
  children: React.ReactNode
}) => {
  return <button aria-label={ariaLabel}>{children}</button>
}

export const SettingsTab = () => {
  return (
    <section className="flex h-full w-full flex-col gap-4 p-4 text-c-snow">
      <header className="flex items-center text-center">
        <h3 className="text-md w-full text-center font-bold">Settings</h3>
      </header>
      <Card>
        <h4>Theme</h4>
        <div className="flex w-full justify-between gap-2">
          <ThemeButton ariaLabel="Light Theme">
            <Sun size={64} />
          </ThemeButton>
          <ThemeButton ariaLabel="Dark Theme">
            <Moon size={64} fill="red" />
          </ThemeButton>
          <ThemeButton ariaLabel="System Theme">
            <SunMoon size={64} />
          </ThemeButton>
        </div>
      </Card>
    </section>
  )
}
