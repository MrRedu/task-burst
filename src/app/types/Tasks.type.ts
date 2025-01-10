export type TaskType = {
  id: string
  title: string
  description?: string
  startDateTime: Date
  endDateTime: Date
  status: boolean
  createdAt: Date
  updatedAt: Date
}
