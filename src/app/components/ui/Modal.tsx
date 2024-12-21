import { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
  modalRef: React.RefObject<HTMLDivElement>
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

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-c-dark bg-opacity-50 ${
        blur ? 'backdrop-blur-sm' : ''
      }`}
    >
      <div
        ref={modalRef}
        className={`
          bg-c-space text-c-snow rounded-xl
          border-[3px] border-c-dark
          shadow-[4px_4px_0_0_rgba(5,5,5,1)]
          max-h-[85vh] max-w-[90vw] overflow-y-auto
          px-16 py-12
          ${
            size === 'sm'
              ? 'w-[320px]'
              : size === 'md'
                ? 'w-[460px]'
                : size === 'lg'
                  ? 'w-[680px] lg'
                  : size === 'xl'
                    ? 'w-[920px]'
                    : ''
          }
          `}
      >
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}
