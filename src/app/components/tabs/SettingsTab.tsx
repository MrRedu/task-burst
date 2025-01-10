import { Monitor, MoonStar, Sun } from 'lucide-react'

import { Card } from '@/components/Card'
import { Switch } from '@/components/ui/Switch'

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
    <section className="flex h-full w-full min-w-[360px] flex-col gap-4 overflow-y-auto p-4 text-c-snow">
      <header className="flex items-center text-center">
        <h3 className="text-md w-full text-center font-bold">Settings</h3>
      </header>

      <Card className="flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-c-snow">
          Hours
        </h4>
        <div className="flex w-full items-center justify-center gap-4">
          12h
          <Switch />
          24h
        </div>
        <p>Formato 24/12 horas</p>
        <p>Acomodar el switch</p>
      </Card>
      <Card className="flex flex-col gap-4">
        <p>Horas previas para marcar una tarea con alerta</p>
        <p>{`<Select/>`} con horas</p>
      </Card>
      <Card className="flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-c-snow">
          Tools
        </h4>
        <div className="flex flex-col gap-4">
          <div className="h-10 w-full bg-red-500" />
          <div className="h-10 w-full bg-red-500" />
          <div className="h-10 w-full bg-red-500" />
        </div>
      </Card>
      <Card className="flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-c-snow">
          Theme
        </h4>
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
    </section>
  )
}
