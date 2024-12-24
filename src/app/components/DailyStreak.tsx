'use client'

import { useHabits } from '../stores/habits/habits.store'
export const DailyStreak = ({
  completedDays,
  habitId,
}: {
  completedDays: string[]
  habitId: string
}) => {
  const year = new Date().getFullYear()
  const completeHabitDay = useHabits(state => state.completeHabitDay) // Obtener la función del store

  const markAsCompleted = (date: string) => {
    completeHabitDay(habitId, date) // Llamar a la función para completar el día
  }

  const renderCalendar = () => {
    const daysInYear = Array.from({ length: 365 }, (_, index) => {
      const date = new Date(year, 0, index + 1)
      const formattedDate = date.toISOString().split('T')[0]
      return (
        <div
          key={formattedDate}
          onClick={() => markAsCompleted(formattedDate)} // Permitir marcar como completado
          className={`relative m-[1px] h-[8px] w-[8px] cursor-pointer rounded-[20%] bg-[lightgray] ${
            completedDays?.includes(formattedDate) && 'bg-green-500'
          }`}
        />
      )
    })

    return <div className="flex w-full flex-wrap">{daysInYear}</div>
  }

  return (
    <div className="relative h-[86px] w-full overflow-auto">
      {renderCalendar()}
    </div>
  )
}
