import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = ({
  id,
  type,
  autoFocus = false,
  placeholder,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      autoFocus={autoFocus}
      placeholder={placeholder}
      className={cn('bg-transparent py-3 pl-1 text-sm outline-none', className)}
      {...props}
    />
  )
}
