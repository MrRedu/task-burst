import { motion } from 'framer-motion'
import React, { Dispatch, SetStateAction } from 'react'

interface CheckboxProps {
  isChecked: boolean
  setIsChecked: Dispatch<SetStateAction<boolean>>
}

export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  setIsChecked,
}) => {
  const checkboxVariants = {
    checked: {
      backgroundColor: '#150001',
      borderColor: '#150001',
      transition: {
        duration: 0.5,
      },
    },
    unchecked: {
      backgroundColor: '#8f8f8f',
      borderColor: '#8f8f8f',
      transition: {
        duration: 0.5,
      },
    },
  }

  const checkmarkVariants = {
    checked: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    unchecked: {
      pathLength: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const spring = {}

  return (
    <motion.div
      className="flex h-6 w-6 min-w-6 cursor-pointer items-center justify-center rounded-md border-2"
      variants={checkboxVariants}
      animate={isChecked ? 'checked' : 'unchecked'}
      onClick={() => setIsChecked(!isChecked)}
      whileTap={{
        scale: 0.8,
      }}
    >
      <svg width="12" height="10" viewBox="0 0 12 10" className="stroke-white">
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke="white"
          d="M1 5.5L4 8.5L11 1.5"
          variants={checkmarkVariants}
          initial="unchecked"
          transition={spring}
          animate={isChecked ? 'checked' : 'unchecked'}
        />
      </svg>
    </motion.div>
  )
}
