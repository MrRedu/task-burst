import { motion } from 'motion/react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
  modalRef: React.RefObject<HTMLDivElement | null>
  size?: string
  blur?: boolean
}

export const Modal = ({
  children,
  onClose,
  modalRef,
  size = 'md',
  blur = false,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    globalThis.addEventListener('keydown', handleKeyDown)
    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-c-dark/50 ${
        blur ? 'backdrop-blur-sm' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0.75, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          bounce: 0.05,
          duration: 0.3,
        }}
        ref={modalRef}
        className={`max-h-[85vh] max-w-[90vw] overflow-y-auto rounded-xl border-[3px] border-c-dark bg-c-space px-8 py-6 text-c-snow shadow-[4px_4px_0_0_rgba(5,5,5,1)] md:px-12 md:py-8 lg:px-16 lg:py-12 ${
          size === 'sm'
            ? 'w-[320px]'
            : size === 'md'
              ? 'w-[460px]'
              : size === 'lg'
                ? 'w-[680px]'
                : size === 'xl'
                  ? 'w-[920px]'
                  : ''
        } `}
      >
        <button
          className="absolute right-2 top-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>,
    document.body
  )
}
