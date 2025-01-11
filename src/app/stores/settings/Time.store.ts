import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type TimeType = {
  is24Hour: boolean
  toggle24Hour: () => void
}

export const useTime = create<TimeType>()(
  persist(
    set => ({
      // Properties
      is24Hour: true,

      // Methods
      toggle24Hour: () => set(state => ({ is24Hour: !state.is24Hour })),
    }),

    {
      name: 'time-store',
    }
  )
)
