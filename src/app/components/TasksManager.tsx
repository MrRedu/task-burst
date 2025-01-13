'use client'

import NumberFlow from '@number-flow/react'
import { Reorder } from 'motion/react'
import { useState } from 'react'

import { CreateTaskForm } from '@/components/forms/CreateTaskForm'
import { EditTaskForm } from '@/components/forms/EditTaskForm'
import { Task } from '@/components/Task'
import { Modal } from '@/components/ui/Modal'
import { ListSkeleton } from '@/components/ui/skeletons/ListSkeleton'
import { useModal } from '@/hooks/useModal'
import { useTasks } from '@/stores/tasks/tasks.store'

import { TaskType } from '../types/Tasks.type'

export const TasksManager = () => {
  // const { isOpen, openModal, closeModal, modalRef } = useModal()
  const modalToEditTask = useModal()

  const tasks = useTasks(state => state.tasks)
  const removeTask = useTasks(state => state.removeTask)
  const toggleStatus = useTasks(state => state.toggleStatus)
  const setTasksOrder = useTasks(state => state.setTasksOrder)

  const [taskSelected, setTaskSelected] = useState<TaskType | undefined>()
  const handleOpenModal = (idTask: string) => {
    setTaskSelected(tasks.find(task => task.id === idTask) as TaskType)
    modalToEditTask.openModal()
  }

  return (
    <>
      <section className="relative flex h-full w-full flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-c-snow">
              Tasks manager
            </h2>
            <CreateTaskForm />
          </div>
          <span className={`pointer-events-none ml-auto text-sm text-c-silver`}>
            (<NumberFlow value={tasks.length} />
            &nbsp;{tasks.length === 1 ? 'task' : 'tasks'})
          </span>
        </div>
        {tasks.length > 0 ? (
          <Reorder.Group
            as="ul"
            values={tasks}
            onReorder={setTasksOrder}
            className="flex h-full flex-col gap-3 overflow-y-auto p-3"
          >
            {tasks.map(task => (
              <Reorder.Item key={task.id} value={task}>
                <Task
                  id={task.id}
                  title={task.title}
                  status={task.status}
                  toggleStatus={toggleStatus}
                  removeTask={removeTask}
                  openModal={handleOpenModal}
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        ) : (
          <ListSkeleton />
        )}
      </section>

      {/* Modal to see task details/edit it */}
      {modalToEditTask.isOpen && (
        <Modal
          onClose={modalToEditTask.closeModal}
          modalRef={modalToEditTask.modalRef}
          blur
          size="lg"
        >
          <EditTaskForm
            task={taskSelected!}
            closeModal={modalToEditTask.closeModal}
          />
        </Modal>
      )}
    </>
  )
}
