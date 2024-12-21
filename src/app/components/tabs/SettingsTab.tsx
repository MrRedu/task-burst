import { Moon, Sun, SunMoon } from 'lucide-react'
import { Card } from '../Card'

const ThemeButton = ({ ariaLabel, children }) => {
  return <button aria-label={ariaLabel}>{children}</button>
}

export const SettingsTab = () => {
  return (
    <section className="text-c-snow p-4 w-full h-full flex flex-col gap-4">
      <header className="flex items-center text-center">
        <h3 className="text-md font-bold text-center w-full">Settings</h3>
      </header>
      <Card>
        <h4>Theme</h4>
        <div className="flex gap-2 w-full justify-between">
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
