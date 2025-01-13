import { Eye, Grip, Trash } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/forms/Checkbox'
import { TaskType } from '@/types/Tasks.type'

const variants = {
  initial: {
    width: 0,
    height: 2,
    x: -100,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    width: '100%',
    height: 2,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    width: 0,
    height: 0,
    x: -100,
    transition: {
      duration: 0.5,
    },
  },
}

export const Task = ({
  id,
  title,
  status,
  toggleStatus,
  removeTask,
  openModal,
}: Pick<TaskType, 'id' | 'title' | 'status'> & {
  toggleStatus: (id: string) => void
  removeTask: (id: string) => void
  openModal: (id: string) => void
}) => {
  return (
    <motion.div className="flex w-full items-center justify-between gap-4 rounded-lg">
      <Checkbox isChecked={status} setIsChecked={() => toggleStatus(id)} />
      <div className="flex w-full items-center justify-between gap-4 overflow-hidden">
        <div className="relative">
          <span
            className="cursor-pointer truncate"
            onClick={() => openModal(id)}
          >
            {title}
          </span>
          <AnimatePresence>
            {status && (
              <motion.span
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="pointer-events-none absolute bottom-0 left-0 top-0 my-auto w-full rounded-full bg-white"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          onClick={() => openModal(id)}
          variant="ghost"
          className="p-1 text-c-silver hover:text-c-snow"
        >
          <Eye size={18} />
        </Button>
        <Button
          onClick={() => removeTask(id)}
          variant="ghost"
          className="p-1 text-c-silver hover:text-red-500"
        >
          <Trash size={18} />
        </Button>
        <Button
          onClick={() => console.log('click')}
          variant="ghost"
          className="cursor-grab p-1 text-c-silver hover:text-c-snow"
        >
          <Grip size={18} />
        </Button>
      </div>
    </motion.div>
  )
}
