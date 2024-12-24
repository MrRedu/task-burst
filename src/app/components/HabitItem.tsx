import { Check, User } from 'lucide-react'

import { Card } from './Card'
import ActivityCalendar from 'react-activity-calendar'
import { HabitType } from '../types/Habits.type'
import { useHabits } from '../stores/habits/habits.store'
import { useEffect } from 'react'

export const HabitItem = ({
  title,
  description,
  completedDays,
  id,
}: Omit<HabitType, 'createdAt' | 'updatedAt'>) => {
  const completeDay = useHabits(state => state.completeDay)
  const updateLastCompletedDay = useHabits(
    state => state.updateLastCompletedDay
  )

  useEffect(() => {
    updateLastCompletedDay(id)
  }, [id, updateLastCompletedDay])

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
      <ActivityCalendar
        data={completedDays}
        hideColorLegend
        hideTotalCount
        hideMonthLabels
        // blockMargin={4}
        // blockRadius={2}
        // blockSize={12}
        maxLevel={1} // Esto cambiarlo después según el habit
        // theme={{
        //   light: ['#f0f0f0', '#384259'],
        //   dark: ['#383838', '#E96479'],
        // }}
        eventHandlers={{
          onClick: event => activity => {
            const { date } = activity
            completeDay(id, date)
          },
          // onMouseEnter: event => activity => { // PARA HACER EL POPUP DE LA CANTIDAD
          //   console.log('on mouse enter')
          // },
        }}
      />
      {/* <DailyStreak completedDays={completedDays} habitId={id} /> */}
    </Card>
  )
}
