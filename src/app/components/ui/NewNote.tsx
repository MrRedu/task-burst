'use client'
import { ArrowLeftIcon } from 'lucide-react'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import { useId } from 'react'
import { Button } from '@/components/ui/Button'
import { useForm } from 'react-hook-form'

import { type TaskType } from '@/app/types/Tasks.type'
import { useTasks } from '@/stores/tasks/tasks.store'

interface TaskFormInputs {
  title: string
  description?: string
}

interface NewNoteProps {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  modalRef: React.RefObject<HTMLDivElement | null>
}

export const NewNote = ({
  isOpen,
  openModal,
  closeModal,
  modalRef,
}: NewNoteProps) => {
  const uniqueId = useId()
  const addTask = useTasks(state => state.addTask)

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
      description: data.description,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as TaskType)
    closeModal()
    reset()
  })

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
          <motion.span
            layoutId={`popover-label-${uniqueId}`}
            className="text-sm"
          >
            Add Note
          </motion.span>
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
              <form className="flex h-full flex-col px-4" onSubmit={onSubmit}>
                <input
                  type="text"
                  autoFocus
                  className="bg-transparent py-3 text-sm outline-none"
                  placeholder="Title"
                  {...register('title', {
                    required: 'This is required',
                    minLength: {
                      value: 3,
                      message: 'Min length is 3 characters',
                    },
                  })}
                />
                {errors?.title && (
                  <motion.span
                    layoutId={`popover-error-${uniqueId}`}
                    className="text-xs font-semibold text-red-500"
                  >
                    {errors?.title?.message}
                  </motion.span>
                )}
                <textarea
                  className="w-full resize-none bg-transparent py-3 text-sm outline-none"
                  placeholder="Description"
                  {...register('description', {
                    minLength: {
                      value: 3,
                      message: 'Min length is 3 characters',
                    },
                  })}
                />

                <div key="close" className="flex justify-between py-3">
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
