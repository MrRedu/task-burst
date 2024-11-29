'use client'

import { useForm } from "react-hook-form";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { useTasks } from "../stores/tasks/tasks.store";
import { type TaskType } from "../types/Tasks.type";
import { Task } from "./Task";

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

  return (
    <>
      <form onSubmit={onSubmit}
        className="flex items-start py-2 px-4 w-full mx-auto gap-2"
      >
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Add a task"
            {...register('title', { required: 'This is required', minLength: { value: 3, message: 'Min length is 3 characters' } })}
            className={`
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              ${errors.title?.message ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500' : ''}
              `}
          />
          {errors && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.title?.message as string}
            </p>
          )}
        </div>
        <button type="submit" onClick={onSubmit} className={'py-2.5'}>Add</button>
      </form >
      {
        tasks.length > 0 && (
          <>
            <div className="flex items-center justify-start px-4 gap-2">
              <button onClick={orderAsc} disabled={tasks.length <= 1}>
                <ArrowUpNarrowWide className="h-4 w-4" />
              </button>
              <button onClick={orderDesc} disabled={tasks.length <= 1}>
                <ArrowDownWideNarrow className="h-4 w-4" />
              </button>
            </div>
            <ul className="divide-y divide-gray-200 py-2 px-4">
              {tasks && tasks.map((task: TaskType) => (
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
        )
      }
    </>
  )
};