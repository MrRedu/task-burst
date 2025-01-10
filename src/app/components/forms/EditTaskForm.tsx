'use client'

import { useForm } from 'react-hook-form'

import { TaskType } from '../../types/Tasks.type'

export const EditTaskForm = ({ task }: { task: TaskType }) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: task.title,
      description: task.description,
      status: task.status,
      startDateTime: task.startDateTime,
      endDateTime: task.endDateTime,
    },
  })
  return (
    <>
      {/* <h3 className="mb-8 text-lg font-bold">Edit Task</h3> */}
      <form
        className="flex h-full flex-col gap-2"
        // onSubmit={onSubmit}
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
        {errors?.description && (
          <span className="text-xs font-semibold text-red-500">
            {errors?.description?.message}
          </span>
        )}
        <div className="flex gap-2">
          <div>
            <label htmlFor="startDateTime">
              <span className="text-sm font-bold">Start date</span>
            </label>
            <input
              id="startDateTime"
              type="datetime-local"
              placeholder="Start date"
              className="w-full resize-none bg-transparent py-3 text-sm outline-none"
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
              className="w-full resize-none bg-transparent py-3 text-sm outline-none"
              {...register('endDateTime', {
                required: 'End date is required',
              })}
            />
          </div>
        </div>
        <pre>
          <code>{JSON.stringify(task, undefined, 2)}</code>
        </pre>
      </form>
    </>
  )
}
