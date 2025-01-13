import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { type TaskType } from '@/app/types/Tasks.type'
import { useTasks } from '@/stores/tasks/tasks.store'

import { taskScheme } from '../schemes/taskScheme'

export interface TaskFormInputs {
  title: string
  description?: string
  startDateTime: string
  endDateTime: string
}

export function useCreateTask({
  openModal,
  closeModal,
}: {
  openModal: () => void
  closeModal: () => void
}) {
  const addTask = useTasks(state => state.addTask)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TaskFormInputs>({
    resolver: zodResolver(taskScheme),
  })
  const onSubmit = handleSubmit(data => {
    addTask({
      id: globalThis.crypto.randomUUID(),
      title: data.title,
      description: data.description,
      status: false,
      startDateTime: new Date(data.startDateTime),
      endDateTime: new Date(data.endDateTime),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as TaskType)
    closeModal()
    reset()
  })

  // Set default values for startDateTime and endDateTime
  useEffect(() => {
    const now = new Date()
    const formattedNow = now.toISOString().slice(0, 16)
    setValue('startDateTime', formattedNow)

    // Set endDateTime to startDateTime + 1 day
    const endDate = new Date(now)
    endDate.setDate(now.getDate() + 1) // Sum 1 day
    const formattedEndDate = endDate.toISOString().slice(0, 16)
    setValue('endDateTime', formattedEndDate)
  }, [setValue, openModal])

  return {
    register,
    errors,
    onSubmit,
    reset,
  }
}

export function useEditTask({
  task,
  closeModal,
}: {
  task: TaskType
  closeModal: () => void
}) {
  const editTask = useTasks(state => state.editTask)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskFormInputs>({
    defaultValues: {
      title: task.title,
      description: task.description,
      startDateTime: new Date(task.startDateTime).toISOString().slice(0, 16),
      endDateTime: new Date(task.endDateTime).toISOString().slice(0, 16),
    },
    resolver: zodResolver(taskScheme),
  })

  const onSubmit = handleSubmit(data => {
    editTask({
      ...task,
      title: data.title,
      description: data.description,
      startDateTime: new Date(data.startDateTime),
      endDateTime: new Date(data.endDateTime),
      updatedAt: new Date(),
    } as TaskType)
    closeModal()
  })

  return {
    register,
    onSubmit,
    errors,
  }
}
