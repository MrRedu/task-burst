import { Grip, Trash } from 'lucide-react'
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
  // createdAt,
  // updatedAt,
  toggleStatus,
  removeTask,
}: TaskType & {
  toggleStatus: (id: string) => void
  removeTask: (id: string) => void
}) => {
  return (
    <motion.div className="flex items-center rounded-lg">
      <Checkbox isChecked={status} setIsChecked={() => toggleStatus(id)} />
      <div className="flex w-full items-center justify-between gap-4 overflow-hidden pl-4">
        <div className="relative">
          <span className="cursor-pointer" onClick={() => toggleStatus(id)}>
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
        <div className="flex items-center gap-2">
          <Button onClick={() => removeTask(id)} variant="ghost">
            <Trash size={18} />
          </Button>
          <Button onClick={() => console.log('click')} variant="ghost">
            <Grip size={18} />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
