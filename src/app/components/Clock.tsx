'use client'
import NumberFlow, { NumberFlowGroup } from '@number-flow/react'
import { useEffect, useState } from 'react'

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 60000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <NumberFlowGroup>
        <div className="text-xl">
          <NumberFlow
            value={time.getHours()}
            format={{ minimumIntegerDigits: 2 }}
          />
          <NumberFlow
            value={time.getMinutes()}
            prefix=":"
            format={{ minimumIntegerDigits: 2 }}
          />
        </div>
      </NumberFlowGroup>
    </>
  )
}
