'use client'

import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import NumberFlow from "@number-flow/react";
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Plus } from "lucide-react";

import { useTasks } from "../stores/tasks/tasks.store";
import { type TaskType } from "../types/Tasks.type";

import { Task, Button, ListSkeleton } from "./";

export const List = () => {
  const tasks = useTasks((state) => state.tasks);
  const addTask = useTasks((state) => state.addTask);
  const removeTask = useTasks((state) => state.removeTask);
  const toggleStatus = useTasks((state) => state.toggleStatus);
  const orderAsc = useTasks((state) => state.orderAsc);
  const orderDesc = useTasks((state) => state.orderDesc);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = handleSubmit((data) => {
    addTask({
      id: uuidv4(),
      title: data.title,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date()
    } as TaskType)
    reset()
  })

  const [parent, enableAnimations] = useAutoAnimate()

  return (
    <section className="flex flex-col gap-2 w-full h-full overflow-hidden">
      <form onSubmit={onSubmit}
        className="flex items-start  w-full mx-auto gap-2"
      >
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Add a task"
            {...register('title',
              {
                required: 'This is required',
                minLength: { value: 3, message: 'Min length is 3 characters' }
              }
            )}
            className={`
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              ${errors.title?.message ? 'border border-red text-red placeholder-700 text-sm rounded-lg focus:ring-red' : ''}
              `}
          />
        </div>
        <Button type="submit" onClick={onSubmit} className={'px-3'} >
          <Plus /> Add
        </Button>
      </form >
      <div className="flex items-center justify-between">
        {errors && (
          <p className="text-sm text-red">
            {errors.title?.message as string}
          </p>
        )}
        <div className="flex items-center justify-start gap-2">
          <span className={`text-sm flex items-center pointer-events-none
            ${tasks.length === 0 && 'text-color-disabled'}`}>
            (<NumberFlow value={tasks.length} />&nbsp;tasks)
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
          <ul ref={parent} className="divide-y divide-gray-200/80 w-full max-h-[600px] md:max-h-full overflow-x-hidden overflow-y-auto ">
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
};