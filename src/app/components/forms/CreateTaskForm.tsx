'use client'
import { ArrowLeftIcon, PlusIcon } from 'lucide-react'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import { useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'

import { type TaskType } from '@/app/types/Tasks.type'
import { Button } from '@/components/ui/Button'
import { useTasks } from '@/stores/tasks/tasks.store'

interface TaskFormInputs {
  title: string
  description?: string
  startDateTime: string
  endDateTime: string
}

interface CreateTaskForm {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  modalRef: React.RefObject<HTMLDivElement | null>
}

export const CreateTaskForm = ({
  isOpen,
  openModal,
  closeModal,
  modalRef,
}: CreateTaskForm) => {
  const uniqueId = useId()
  const addTask = useTasks(state => state.addTask)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TaskFormInputs>()
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
    const formattedNow = now.toISOString().slice(0, 16) // Formato a YYYY-MM-DDTHH:MM
    setValue('startDateTime', formattedNow)

    // Calcular la fecha de fin (un día más)
    const endDate = new Date(now)
    endDate.setDate(now.getDate() + 1) // Sumar un día
    const formattedEndDate = endDate.toISOString().slice(0, 16) // Formato a YYYY-MM-DDTHH:MM
    setValue('endDateTime', formattedEndDate)
  }, [setValue, openModal])

  return (
    <MotionConfig
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.3,
      }}
    >
      <div className="flex items-center justify-center">
        <motion.button
          key="button"
          layoutId={`popover-${uniqueId}`}
          className="flex items-center justify-center gap-2 rounded-md border-transparent bg-c-woodsmoke p-2.5 px-5 text-center text-sm text-c-snow hover:bg-c-woodsmoke/80"
          style={{
            borderRadius: 6,
          }}
          onClick={openModal}
        >
          <span className="lg:hidden">
            <PlusIcon size={20} stroke="currentColor" />
          </span>
          <span className="hidden lg:block">Create new task</span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={modalRef}
              layoutId={`popover-${uniqueId}`}
              className="absolute left-0 top-0 z-50 h-auto w-full overflow-hidden border border-zinc-950/10 bg-c-woodsmoke outline-none"
              style={{
                borderRadius: 6,
              }}
            >
              <form
                className="flex h-full flex-col gap-2 p-4"
                onSubmit={onSubmit}
              >
                <div className="flex flex-col">
                  <label htmlFor="title">
                    <span className="text-sm font-bold">Title</span>
                    <span className="text-red-500">{` * `}</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    autoFocus
                    className="bg-transparent py-3 pl-1 text-sm outline-none"
                    placeholder="Create article about flex-box"
                    {...register('title', {
                      required: 'Title is required',
                      minLength: {
                        value: 3,
                        message: 'Title must be at least 3 characters',
                      },
                    })}
                  />
                  {errors?.title && (
                    <span className="text-xs font-semibold text-red-500">
                      {errors?.title?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="description">
                    <span className="text-sm font-bold">Description</span>
                    {/* <span className="text-red-500">{` * `}</span> */}
                  </label>
                  <textarea
                    id="description"
                    className="w-full resize-none bg-transparent py-3 pl-1 text-sm outline-none"
                    placeholder="Article about flex-box with Tailwind CSS"
                    {...register('description', {
                      minLength: {
                        value: 3,
                        message: 'Description must be at least 3 characters',
                      },
                    })}
                  />
                  {errors?.description && (
                    <span className="text-xs font-semibold text-red-500">
                      {errors?.description?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 md:flex-row">
                  <div>
                    <label htmlFor="startDateTime">
                      <span className="text-sm font-bold">Start date</span>
                    </label>
                    <input
                      id="startDateTime"
                      type="datetime-local"
                      placeholder="Start date"
                      className="w-full resize-none bg-transparent py-3 pl-1 text-sm outline-none"
                      {...register('startDateTime', {
                        required: 'Start date is required',
                      })}
                    />
                  </div>
                  <div>
                    <label htmlFor="endDateTime">
                      <span className="text-sm font-bold">End date</span>
                    </label>
                    <input
                      id="endDateTime"
                      type="datetime-local"
                      className="w-full resize-none bg-transparent py-3 pl-1 text-sm outline-none"
                      {...register('endDateTime', {
                        required: 'End date is required',
                      })}
                    />
                  </div>
                </div>

                <div key="close" className="flex justify-between">
                  <Button
                    aria-label="Close popover"
                    variant="ghost"
                    onClick={closeModal}
                  >
                    <ArrowLeftIcon
                      size={16}
                      className="text-zinc-900 dark:text-zinc-100"
                    />
                  </Button>
                  <Button
                    type="submit"
                    variant="ghost"
                    aria-label="Create task"
                    onClick={onSubmit}
                  >
                    Create task
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
