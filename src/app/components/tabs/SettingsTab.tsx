import Link from 'next/link'

import { Card } from '@/components/Card'
import { Switch } from '@/components/ui/Switch'

import { ThemeSwitcher } from '../ui/ThemeSwitcher'

export const SettingsTab = () => {
  return (
    <section className="flex h-full w-full min-w-[360px] flex-col gap-4 overflow-y-auto p-4 text-c-snow">
      <header className="flex items-center text-center">
        <h3 className="text-md w-full text-center font-bold">Settings</h3>
      </header>

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
          Hours
        </h4>
        <div className="flex w-full items-center justify-center gap-4">
          12h
          <Switch />
          24h
        </div>
      </Card>
      <Card className="flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-c-snow">
          Tasks
        </h4>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Hours to alert</label>
          <select name="" id="">
            <option value="">1H</option>
            <option value="">2H</option>
            <option value="">3H</option>
            <option value="">4H</option>
            <option value="">5H</option>
            <option value="">6H</option>
          </select>
        </div>
      </Card>

      <Card className="flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-c-snow">
          Theme
        </h4>
        <div className="flex w-full justify-center gap-4">
          <ThemeSwitcher />
        </div>
      </Card>
      <Card className="flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-c-snow">
          About
        </h4>
        <div className="flex flex-col gap-2">
          <p className="text-semibold text-pretty text-sm text-c-silver">
            {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, alias exercitationem repellat necessitatibus sapiente placeat corporis ut laborum reiciendis magnam sit consequuntur, inventore vero fugit voluptates labore, cum doloremque dicta?`}
          </p>
          <h5 className="text-sm font-semibold">{`Feature Overview`}</h5>
          <p className="text-semibold text-pretty text-sm text-c-silver">
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        deserunt, voluptates dolores eum odio explicabo delectus ipsam suscipit
        cum consequatur.`}
          </p>
          <p className="text-semibold text-pretty text-sm text-c-silver">
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        deserunt, voluptates dolores eum odio explicabo delectus ipsam suscipit
        cum consequatur.`}
          </p>
          <h5 className="text-sm font-semibold">{`Contribution`}</h5>
          <p className="text-semibold text-pretty text-sm text-c-silver">
            The project is Open Source and available on{' '}
            <Link
              href="https://github.com/MrRedu/task-burst/"
              className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            .
          </p>
          <p className="text-semibold text-pretty text-sm text-c-silver">
            If you have any feedback, suggestions, or issues, please{' '}
            <Link
              href="https://github.com/MrRedu/task-burst/issues"
              className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              open an issue
            </Link>{' '}
            on Github.
          </p>
        </div>
      </Card>
    </section>
  )
}
