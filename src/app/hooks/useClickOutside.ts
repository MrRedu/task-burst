import { useEffect } from 'react'

export function useClickOutside(
  ref: React.RefObject<HTMLDivElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref?.current || ref?.current.contains(event.target as Node)) {
        return
      }
      callback(event)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [ref, callback])
}
