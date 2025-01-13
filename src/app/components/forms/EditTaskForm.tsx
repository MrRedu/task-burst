'use client'

import { ArrowLeftIcon } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { FormItem } from '@/components/ui/forms/FormItem'
import { HelperText } from '@/components/ui/forms/HelperText'
import { Input } from '@/components/ui/forms/Input'
import { Label } from '@/components/ui/forms/Label'
import { useEditTask } from '@/hooks/useTasks'

import { TaskType } from '../../types/Tasks.type'

interface EditTaskFormProps {
  task: TaskType
  closeModal: () => void
}

export const EditTaskForm = ({ task, closeModal }: EditTaskFormProps) => {
  const { register, errors, onSubmit } = useEditTask({ task, closeModal })

  return (
    <form className="flex h-full flex-col gap-4 p-4" onSubmit={onSubmit}>
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
          <HelperText variant="error">{errors?.title?.message}</HelperText>
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
          {errors?.startDateTime && (
            <HelperText variant="error">
              {errors?.startDateTime?.message}
            </HelperText>
          )}
        </FormItem>
        <FormItem>
          <Label htmlFor="endDateTime">End date</Label>
          <Input
            id="endDateTime"
            type="datetime-local"
            {...register('endDateTime')}
          />
          {errors?.endDateTime && (
            <HelperText variant="error">
              {errors?.endDateTime?.message}
            </HelperText>
          )}
        </FormItem>
      </FormItem>

      <div className="flex justify-between">
        <Button aria-label="Close modal" variant="ghost" onClick={closeModal}>
          <ArrowLeftIcon
            size={16}
            className="text-zinc-900 dark:text-zinc-100"
          />
        </Button>
        <Button
          type="submit"
          variant="ghost"
          aria-label="Edit task"
          onClick={onSubmit}
        >
          Edit task
        </Button>
      </div>
    </form>
  )
}
