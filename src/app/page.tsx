import { Card } from '@/components/Card'
import { Clock } from '@/components/Clock'
import { List } from '@/components/List'

export default function HomePage() {
  return (
    <section
      className={`// Background Dotted relative z-0 mr-2 flex grid-cols-2 grid-rows-2 flex-col gap-6 overflow-y-auto rounded-xl bg-c-woodsmoke bg-[radial-gradient(#4d4d4d,transparent_1px)] p-4 [background-size:24px_24px] md:grid md:overflow-hidden`}
    >
      <Card className="h-full">Algo</Card>
      <Card className="row-span-2">
        <List />
      </Card>
      <Card className="h-full">
        {/* Pomodoro */}
        <Clock />
      </Card>
    </section>
  )
}
