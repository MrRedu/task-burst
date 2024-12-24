// import { HabitType } from "@/app/types/Habits.type";
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type HabitType = {
  id: string
  title: string
  description?: string
  completedDays: string[]
  createdAt: Date
  updatedAt: Date
}

interface HabitState {
  habits: HabitType[]

  addHabit: (habit: HabitType) => void
  completeHabitDay: (habitId: string, date: string) => void // Nueva función para completar un día
}

export const useHabits = create<HabitState>()(
  persist(
    set => ({
      // Properties
      habits: [],

      // Methods
      addHabit: habit =>
        set(state => {
          // if (state.tasks.some((t) => t.title === task.title)) {
          //   toast.error("Task already exists");
          //   return state; // -> Return error because title is already in the list
          // }
          return { habits: [habit, ...state.habits] }
        }),
      completeHabitDay: (habitId, date) =>
        set(state => {
          const updatedHabits = state.habits.map(habit => {
            if (habit.id === habitId) {
              return {
                ...habit,
                completedDays: [...habit?.completedDays, date],
              }
            }
            return habit
          })
          return { habits: updatedHabits }
        }),
    }),
    {
      name: 'habits-store',
    }
  )
)
