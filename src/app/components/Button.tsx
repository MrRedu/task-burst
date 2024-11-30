import { Spinner } from "@/components/ui/Spinner"

type ButtonProps = {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  onlyIcon?: boolean
  icon?: React.ElementType
  type?: 'submit' | 'reset' | 'button'
  isLoading?: boolean
  variant?: 'solid' | 'bordered' | 'light' | 'ghost'
  isDisabled?: boolean
}

export const Button = ({
  children,
  className,
  onlyIcon = false,
  icon: Icon,
  type = 'button',
  isLoading = false,
  variant = 'solid',
  onClick,
  isDisabled = false
}: ButtonProps): JSX.Element => {
  const solidStyles = `
  bg-slate-800 border-transparent text-white shadow-sm 
  hover:shadow-lg hover:bg-slate-700
  focus:bg-slate-700 focus:shadow-none 
  active:bg-slate-700 active:shadow-none`
  const ghostStyles = `
  border-slate-300 shadow-sm text-slate-600 
  hover:shadow-lg hover:text-white hover:bg-slate-800 hover:border-slate-800 
  focus:text-white focus:bg-slate-800 focus:border-slate-800
  active:border-slate-800 active:text-white active:bg-slate-800`
  const lightStyles = `
  border-transparent text-slate-600 
  hover:bg-slate-100 
  focus:bg-slate-100 
  active:bg-slate-100`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
      flex items-center justify-center gap-2 text-sm 
      rounded-md p-2.5 border text-center transition-all
      ${isDisabled && 'shadow-none pointer-events-none opacity-50'}
      ${variant === 'solid' && solidStyles}
      ${variant === 'ghost' && ghostStyles}
      ${variant === 'light' && lightStyles}
      ${className}
    `}>
      {isLoading && <Spinner />}
      {!onlyIcon && children}
      {onlyIcon && Icon && <Icon className="h-4 w-4" />}
    </button>
  )
};
