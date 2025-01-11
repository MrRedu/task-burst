interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  blur?: boolean
}

export const Drawer = ({
  isOpen,
  onClose,
  blur = false,
  children,
}: DrawerProps) => {
  // return ReactDOM.createPortal(
  return (
    <>
      <div
        className={`fixed inset-0 bg-c-dark/50 transition-opacity duration-[225ms] ${isOpen ? 'visible z-0 opacity-100' : 'invisible -z-10 opacity-0'} ${
          blur ? 'backdrop-blur-sm' : ''
        } `}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed bottom-0 left-0 right-0 z-[500] flex h-fit max-h-[80%] min-h-[35%] flex-col overflow-y-auto rounded-t-[10px] bg-c-woodsmoke outline-none transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        <div
          aria-hidden
          className="mx-auto mb-2 mt-4 h-1.5 w-12 flex-shrink-0 cursor-grab rounded-full bg-c-disabled"
        />
        {children}
      </div>
    </>
    // ,
    // document.body
    // )
  )
}
