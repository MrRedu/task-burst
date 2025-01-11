'use client'
import { motion } from 'motion/react'

interface SwitchProps {
  isOn: boolean
  toggleSwitch: () => void
  childrenButton?: React.ReactNode
  childrenSwitch?: React.ReactNode
}

export const Switch = ({
  isOn,
  toggleSwitch,
  childrenButton,
  childrenSwitch,
}: SwitchProps) => {
  return (
    <button
      className={`toggle-container relative flex h-[60px] w-full cursor-pointer items-center rounded-xl bg-c-woodsmoke p-2 ${isOn ? 'justify-end' : 'justify-start'}`}
      onClick={toggleSwitch}
    >
      {childrenSwitch && childrenSwitch}
      <motion.div
        className="toggle-handle grid h-[44px] w-1/2 place-items-center rounded-lg bg-c-space"
        layout
        transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
      >
        {childrenButton && childrenButton}
      </motion.div>
    </button>
  )
}
