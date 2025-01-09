'use client'

import NumberFlow from '@number-flow/react'
import { Reorder } from 'motion/react'

import { useModal } from '../hooks/useModal'
import { useTasks } from '../stores/tasks/tasks.store'
import { ListSkeleton, Task } from './'
import { NewNote } from './ui/NewNote'

export const List = () => {
  // const { isOpen, openModal, closeModal, modalRef } = useModal()
  const modalToAddTask = useModal()

  const tasks = useTasks(state => state.tasks)
  const removeTask = useTasks(state => state.removeTask)
  const toggleStatus = useTasks(state => state.toggleStatus)
  // const orderAsc = useTasks(state => state.orderAsc)
  // const orderDesc = useTasks(state => state.orderDesc)
  const setTasksOrder = useTasks(state => state.setTasksOrder)

  return (
    <section className="relative flex h-full w-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <NewNote
          isOpen={modalToAddTask.isOpen}
          openModal={modalToAddTask.openModal}
          closeModal={modalToAddTask.closeModal}
          modalRef={modalToAddTask.modalRef}
        />
        <span
          className={`pointer-events-none flex items-center text-sm ${tasks.length === 0 && 'text-c-disabled'}`}
        >
          (<NumberFlow value={tasks.length} />
          &nbsp;tasks)
        </span>
      </div>
      {tasks.length > 0 ? (
        <Reorder.Group
          as="ul"
          values={tasks}
          onReorder={setTasksOrder}
          className="flex h-full flex-col gap-1 overflow-hidden"
        >
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
