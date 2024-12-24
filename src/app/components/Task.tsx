import { Grip, Trash } from 'lucide-react'

import { TaskType } from '../types/Tasks.type'
import { Button } from './Button'
import { Checkbox } from './ui/forms/Checkbox'

export const Task = ({
  id,
  title,
  status,
  // createdAt,
  // updatedAt,
  toggleStatus,
  removeTask,
}: TaskType & {
  toggleStatus: (id: string) => void
  removeTask: (id: string) => void
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex w-full items-center">
        <Checkbox checked={status} onChange={() => toggleStatus(id)} />
        <label htmlFor={title} className="ml-3 block w-full">
          <span className={`${status ? 'line-through' : ''}`}>{title}</span>
        </label>
      </div>
      <div className="flex items-center">
        <Button
          onClick={() => removeTask(id)}
          onlyIcon
          icon={Trash}
          variant="light"
        />
        <Button
          onClick={() => console.log('click')}
          onlyIcon
          icon={Grip}
          variant="light"
        />
      </div>
    </div>
  )
}
