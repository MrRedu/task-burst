// Acomodar imports
import { toast } from 'sonner'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { TaskType } from '@/app/types/Tasks.type'

interface TaskState {
  tasks: TaskType[]

  addTask: (task: TaskType) => void
  removeTask: (id: string) => void
  toggleStatus: (id: string) => void

  orderAsc: () => void
  orderDesc: () => void
}

export const useTasks = create<TaskState>()(
  persist(
    set => ({
      // Properties
      tasks: [],

      // Methods
      addTask: task =>
        set(state => {
          if (state.tasks.some(t => t.title === task.title)) {
            toast.error('Task already exists')
            return state // -> Return error because title is already in the list
          }
          return { tasks: [task, ...state.tasks] }
        }),
      removeTask: id =>
        set(state => ({
          tasks: state.tasks.filter(task => task.id !== id),
        })),
      toggleStatus: id =>
        set(state => ({
          tasks: state.tasks.map(task =>
            task.id === id ? { ...task, status: !task.status } : task
          ),
        })),
      orderAsc: () =>
        set(state => {
          const sortedTasks = [...state.tasks].sort((a, b) => {
            if (a.createdAt < b.createdAt) return -1
            if (a.createdAt > b.createdAt) return 1
            return 0
          })
          return { tasks: sortedTasks }
        }),
      orderDesc: () =>
        set(state => {
          const sortedTasks = [...state.tasks].sort((a, b) => {
            if (a.createdAt > b.createdAt) return -1
            if (a.createdAt < b.createdAt) return 1
            return 0
          })
          return { tasks: sortedTasks }
        }),
    }),

    {
      name: 'tasks-store',
      // partialize: (state) => ({ todos: state.todos }),
    }
  )
)
