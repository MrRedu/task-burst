'use client'
import NumberFlow, { NumberFlowGroup } from '@number-flow/react'
import { useEffect, useState } from 'react'

import { type TimeType, useTime } from '@/stores/settings/Time.store'

export const Clock = () => {
  const [time, setTime] = useState(new Date())
  const is24HourFormat = useTime((state: TimeType) => state.is24Hour)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Function to convert 24-hour format to 12-hour format
  const getFormattedHours = (hours: number) => {
    if (!is24HourFormat) {
      return hours % 12 || 12 // Convert to 12-hour format
    }
    return hours
  }

  return (
    <>
      <NumberFlowGroup>
        <div className="font-mono font-black">
          <NumberFlow
            value={getFormattedHours(time.getHours())}
            format={{ minimumIntegerDigits: 2 }}
          />
          <NumberFlow
            value={time.getMinutes()}
            prefix=":"
            format={{ minimumIntegerDigits: 2 }}
          />
          <NumberFlow
            value={time.getSeconds()}
            prefix=":"
            format={{ minimumIntegerDigits: 2 }}
          />
          {!is24HourFormat && (
            <span className="ml-1">{time.getHours() >= 12 ? 'PM' : 'AM'}</span>
          )}
        </div>
      </NumberFlowGroup>
    </>
  )
}
