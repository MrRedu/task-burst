'use client'

import * as motion from 'motion/react-client'
import { useState } from 'react'

export const Switch = () => {
  // { isOn, toggleSwitch }
  const [isOn, setIsOn] = useState(true)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <button
      className={`toggle-container flex h-[50px] w-[100px] cursor-pointer items-center rounded-full bg-[#c3d5ff] p-[5px] ${isOn ? 'justify-start' : 'justify-end'}`}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle h-[42px] w-[42px] rounded-full bg-[#9911ff]"
        layout
        transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
      />
    </button>
  )
}
