'use client'
import { ArrowLeftIcon, PlusIcon } from 'lucide-react'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import { useId } from 'react'

import { Button } from '@/components/ui/Button'
import { useTask } from '@/hooks/useTask'
import { useModal } from '@/hooks/useModal'
import { FormItem } from '../ui/forms/FormItem'
import { Input } from '../ui/forms/Input'
import { Label } from '../ui/forms/Label'
import { HelperText } from '../ui/forms/HelperText'

export const CreateTaskForm = () => {
  const uniqueId = useId()
  const { isOpen, openModal, closeModal, modalRef } = useModal()
  const { register, errors, onSubmit, reset } = useTask({
    openModal,
    closeModal,
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
                className="flex h-full flex-col gap-4 p-4"
                onSubmit={onSubmit}
              >
                <FormItem>
                  <Label htmlFor="title" isRequired>
                    Title
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    autoFocus
                    placeholder="Create article about flex-box"
                    {...register('title')}
                  />
                  {errors?.title && (
                    <HelperText variant="error">
                      {errors?.title?.message}
                    </HelperText>
                  )}
                </FormItem>
                <FormItem>
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    className="w-full resize-none bg-transparent py-3 pl-1 text-sm outline-none"
                    placeholder="Article about flex-box with Tailwind CSS"
                    {...register('description')}
                  />
                  {errors?.description && (
                    <HelperText variant="error">
                      {errors?.description?.message}
                    </HelperText>
                  )}
                </FormItem>

                <FormItem className="gap-4 lg:flex-row">
                  <FormItem>
                    <Label htmlFor="startDateTime">Start date</Label>
                    <Input
                      id="startDateTime"
                      type="datetime-local"
                      placeholder="Start date"
                      {...register('startDateTime')}
                    />
                  </FormItem>
                  <FormItem>
                    <Label htmlFor="endDateTime">End date</Label>
                    <Input
                      id="endDateTime"
                      type="datetime-local"
                      {...register('endDateTime')}
                    />
                  </FormItem>
                </FormItem>

                <div className="flex justify-between">
                  <Button
                    aria-label="Close popover"
                    variant="ghost"
                    onClick={() => {
                      closeModal()
                      reset()
                    }}
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
