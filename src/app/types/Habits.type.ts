export type HabitType = {
  id: string
  title: string
  description?: string
  completedDays: Activity[]
  createdAt: Date
  updatedAt: Date
}

export interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}
