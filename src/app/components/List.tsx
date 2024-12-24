'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import NumberFlow from '@number-flow/react'
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { useTasks } from '../stores/tasks/tasks.store'
import { type TaskType } from '../types/Tasks.type'
import { Button, ListSkeleton, Task } from './'
import { Input } from './ui/forms/Input'

export const List = () => {
  const tasks = useTasks(state => state.tasks)
  const addTask = useTasks(state => state.addTask)
  const removeTask = useTasks(state => state.removeTask)
  const toggleStatus = useTasks(state => state.toggleStatus)
  const orderAsc = useTasks(state => state.orderAsc)
  const orderDesc = useTasks(state => state.orderDesc)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const onSubmit = handleSubmit(data => {
    addTask({
      id: globalThis.crypto.randomUUID(),
      title: data.title,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as TaskType)
    reset()
  })

  const [parent] = useAutoAnimate()

  return (
    <section className="flex h-full w-full flex-col gap-2">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-full items-start gap-2"
      >
        <div className="flex w-full flex-col">
          <Input
            type="text"
            placeholder="Add a task"
            {...register('title', {
              required: 'This is required',
              minLength: { value: 3, message: 'Min length is 3 characters' },
            })}
          />
        </div>
        <Button type="submit" onClick={onSubmit} className={'px-3'}>
          <Plus /> Add
        </Button>
      </form>
      <div className="flex items-center justify-between">
        {errors && (
          <p className="text-sm text-red-500">
            {errors.title?.message as string}
          </p>
        )}
        <div className="flex items-center justify-start gap-2">
          <span
            className={`pointer-events-none flex items-center text-sm ${tasks.length === 0 && 'text-c-disabled'}`}
          >
            (<NumberFlow value={tasks.length} />
            &nbsp;tasks)
          </span>
          <Button
            onClick={orderAsc}
            isDisabled={tasks.length <= 1}
            variant="ghost"
            onlyIcon
            icon={ArrowUpNarrowWide}
          />
          <Button
            onClick={orderDesc}
            isDisabled={tasks.length <= 1}
            variant="ghost"
            onlyIcon
            icon={ArrowDownWideNarrow}
          />
        </div>
      </div>
      {tasks.length > 0 ? (
        <>
          <ul
            ref={parent}
            className="max-h-[600px] w-full divide-y divide-gray-200/80 overflow-y-auto overflow-x-hidden md:max-h-full"
          >
            {tasks.map((task: TaskType) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                status={task.status}
                createdAt={task.createdAt}
                updatedAt={task.updatedAt}
                toggleStatus={toggleStatus}
                removeTask={removeTask}
              />
            ))}
          </ul>
        </>
      ) : (
        <ListSkeleton />
      )}
    </section>
  )
}
