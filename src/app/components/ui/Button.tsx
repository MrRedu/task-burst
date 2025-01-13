import { Spinner } from '@/components/ui/skeletons/Spinner'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  href?: string
  icon?: React.ElementType
  onlyIcon?: boolean
  isLoading?: boolean
  variant?: 'solid' | 'ghost' | 'destructive'
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
  disabled = false,
}: ButtonProps) => {
  const solidStyles = `
  bg-c-woodsmoke  text-white  
  hover:bg-c-woodsmoke/80
  `
  const ghostStyles = `
  hover:bg-c-dark/20 
  `
  const destructiveStyles = `
  bg-red-500 text-white shadow-sm 
  hover:bg-red-500/80
  `

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 rounded-md border-transparent p-2.5 text-center text-sm transition-all duration-300 ease-in-out ${disabled && 'pointer-events-none opacity-50 shadow-none'} ${variant === 'solid' && solidStyles} ${variant === 'ghost' && ghostStyles} ${variant === 'destructive' && destructiveStyles} ${className}`}
    >
      {isLoading && <Spinner />}
      {!onlyIcon && children}
      {onlyIcon && Icon && <Icon className="h-4 w-4" />}
    </button>
  )
}
