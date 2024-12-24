'use client'

import NumberFlow from '@number-flow/react'
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from 'lucide-react'
import { Reorder } from 'motion/react'
import { useForm } from 'react-hook-form'

import { useModal } from '../hooks/useModal'
import { useTasks } from '../stores/tasks/tasks.store'
import { type TaskType } from '../types/Tasks.type'
import { Button, ListSkeleton, Task } from './'
import NewNote from './ui/NewNote'

export interface TaskFormInputs {
  title: string
}

export const List = () => {
  // const { isOpen, openModal, closeModal, modalRef } = useModal()
  const modalToAddTask = useModal()

  const tasks = useTasks(state => state.tasks)
  const addTask = useTasks(state => state.addTask)
  const removeTask = useTasks(state => state.removeTask)
  const toggleStatus = useTasks(state => state.toggleStatus)
  const orderAsc = useTasks(state => state.orderAsc)
  const orderDesc = useTasks(state => state.orderDesc)
  const setTasksOrder = useTasks(state => state.setTasksOrder)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<TaskFormInputs>()
  const onSubmit = handleSubmit(data => {
    addTask({
      id: globalThis.crypto.randomUUID(),
      title: data.title,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as TaskType)
    modalToAddTask.closeModal()
    reset()
  })

  return (
    <section className="relative flex h-full w-full flex-col gap-2">
      <NewNote
        isOpen={modalToAddTask.isOpen}
        openModal={modalToAddTask.openModal}
        closeModal={modalToAddTask.closeModal}
        modalRef={modalToAddTask.modalRef}
        onSubmit={onSubmit}
        register={register}
        watch={watch}
      />
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
        <Reorder.Group as="ul" values={tasks} onReorder={setTasksOrder}>
          {tasks.map(task => (
            <Reorder.Item key={task.id} value={task}>
              <Task
                id={task.id}
                title={task.title}
                status={task.status}
                createdAt={task.createdAt}
                updatedAt={task.updatedAt}
                toggleStatus={toggleStatus}
                removeTask={removeTask}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      ) : (
        <ListSkeleton />
      )}
    </section>
  )
}
