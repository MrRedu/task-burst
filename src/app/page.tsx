import { Card } from '@/components/Card'
import { Clock } from '@/components/Clock'
import { TasksManager } from '@/components/TasksManager'

export default function HomePage() {
  return (
    <section
      className={`relative flex h-full w-full grid-cols-2 flex-col gap-6 overflow-y-auto rounded-xl bg-c-woodsmoke bg-[radial-gradient(#4d4d4d,transparent_1px)] p-4 [background-size:24px_24px] md:grid`}
    >
      <Card className="h-full">Algo</Card>
      <Card className="row-span-2">
        <TasksManager />
      </Card>
      <Card className="h-full">
        <Clock />
      </Card>
    </section>
  )
}
