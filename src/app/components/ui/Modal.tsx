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
      className={`z-100 fixed inset-0 flex items-center justify-center bg-c-dark bg-opacity-50 ${
        blur ? 'backdrop-blur-sm' : ''
      }`}
    >
      <div
        ref={modalRef}
        className={`max-h-[85vh] max-w-[90vw] overflow-y-auto rounded-xl border-[3px] border-c-dark bg-c-space px-16 py-12 text-c-snow shadow-[4px_4px_0_0_rgba(5,5,5,1)] ${
          size === 'sm'
            ? 'w-[320px]'
            : size === 'md'
              ? 'w-[460px]'
              : size === 'lg'
                ? 'lg w-[680px]'
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
      </div>
    </div>,
    document.body
  )
}
