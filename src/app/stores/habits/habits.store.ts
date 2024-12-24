import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Activity, HabitType } from '../../types/Habits.type'

interface HabitState {
  habits: HabitType[]

  addHabit: (habit: HabitType) => void
  completeDay: (habitId: string, date: string) => void
  updateLastCompletedDay: (habitId: string) => void
}

export const useHabits = create<HabitState>()(
  persist(
    set => ({
      // Properties
      habits: [],

      // Methods
      addHabit: habit =>
        set(state => {
          if (state.habits.some(t => t.title === habit.title)) {
            alert('Habit already exists')
            return state // -> Return error because title is already in the list
          }
          return { habits: [habit, ...state.habits] }
        }),
      completeDay: (habitId, date) =>
        set(state => {
          const habit = state.habits.find(h => h.id === habitId)
          if (!habit) return state

          // TODO: Esto re-renderiza TODA la página. Quiero que solo renderice el componente HabitItem
          const newActivity: Activity = { date, count: 1, level: 1 }
          const completedDays = [...habit.completedDays, newActivity]
          completedDays.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )

          return {
            habits: state.habits.map(h =>
              h.id === habitId ? { ...h, completedDays } : h
            ),
          }
        }),
      updateLastCompletedDay: (habitId: string) =>
        set(state => {
          const habit = state.habits.find(h => h.id === habitId)
          if (!habit) return state

          const today = new Date().toISOString().split('T')[0] // Obtiene la fecha actual en formato YYYY-MM-DD
          const lastCompletedDay =
            habit.completedDays[habit.completedDays.length - 1]

          if (lastCompletedDay && lastCompletedDay.date !== today) {
            // Si la última fecha completada no es hoy, actualiza
            const updatedCompletedDays = [
              ...habit.completedDays,
              { date: today, count: 0, level: 0 }, // Añade la nueva fecha
            ]

            return {
              habits: state.habits.map(h =>
                h.id === habitId
                  ? { ...h, completedDays: updatedCompletedDays }
                  : h
              ),
            }
          }

          return state // Retorna sin cambios si la última fecha es hoy
        }),
    }),
    {
      name: 'habits-store',
    }
  )
)
