import { Check, User } from 'lucide-react'

import { Card } from './Card'
import { DailyStreak } from './DailyStreak'

export const HabitItem = ({
  title,
  description,
  completedDays,
  id,
}: {
  title: string
  description?: string
  completedDays: string[]
  id: string
}) => {
  return (
    <Card className="flex flex-col gap-2">
      <header className="flex items-center gap-2">
        <User className="h-8 w-8 rounded-xl bg-gray-300/20 p-2" />
        <div>
          <h4 className="font-semi-bold">{title}</h4>
          <p className="text-sm text-c-silver">{description}</p>
        </div>
        <button className="ml-auto">
          <Check className="h-8 w-8 rounded-xl bg-gray-300/20 p-2" />
        </button>
      </header>
      <DailyStreak completedDays={completedDays} habitId={id} />
    </Card>
  )
}
