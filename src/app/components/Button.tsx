type ButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  onlyIcon?: boolean
  icon?: React.ElementType
  type?: 'submit' | 'reset' | 'button'
  // isLoading?: boolean
  variant?: 'solid' | 'bordered' | 'light' | 'ghost'
  isDisabled?: boolean
}

export const Button = ({
  children,
  className,
  onlyIcon = false,
  icon: Icon,
  type = 'button',
  // isLoading = false,
  variant = 'solid',
  onClick
}: ButtonProps): JSX.Element => {
  const solidStyles = 'bg-slate-800 border-transparent text-sm text-white  shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
  const ghostStyles = 'border-slate-300 text-sm  shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
  const lightStyles = 'border-transparent text-sm  text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
  return (
    <button type={type} onClick={onClick} className={`
      rounded-md p-2.5 border text-center transition-all
      ${variant === 'solid' && solidStyles}
      ${variant === 'ghost' && ghostStyles}
      ${variant === 'light' && lightStyles}
      ${className}
    `}>
      {!onlyIcon && children}
      {onlyIcon && Icon && <Icon className="h-4 w-4" />}
    </button>
  )
};
