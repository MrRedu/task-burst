'use client'

import { useForm } from "react-hook-form";
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Plus } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { useTasks } from "../stores/tasks/tasks.store";
import { type TaskType } from "../types/Tasks.type";
import { Task } from "./Task";
import { Button } from "./Button";

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
    <section>
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
              ${errors.title?.message ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500' : ''}
              `}
          />
        </div>
        <button type="submit" onClick={onSubmit} className={'flex gap-2 py-2.5'}>
          <Plus /> Add
        </button>
      </form >
      <div className="flex items-center justify-between h-8">
        {errors && (
          <p className="text-sm text-red">
            {errors.title?.message as string}
          </p>
        )}
        <div className="flex items-center justify-start gap-2">
          <Button onClick={orderAsc} isDisabled={tasks.length <= 1} onlyIcon icon={ArrowUpNarrowWide} className={`
            ${tasks.length <= 1 ? 'opacity-50 cursor-not-allowed' : ''}
            `}>
            {/* <ArrowUpNarrowWide className="h-4 w-4" /> */}
          </Button>
          <Button onClick={orderDesc} isDisabled={tasks.length <= 1} className={`
            ${tasks.length <= 1 ? 'opacity-50 cursor-not-allowed' : ''}
            `}>
            <ArrowDownWideNarrow className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {
        tasks.length > 0 && (
          <>
            <ul className="divide-y divide-gray-200">
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
    </section>
  )
};