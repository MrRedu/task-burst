import { cn } from '@/lib/utils'

interface HelperTextProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'error' | 'success'
}

export const HelperText = ({
  children,
  className,
  variant = 'default',
}: HelperTextProps) => {
  const variantStyles: Record<string, string> = {
    default: 'text-xs font-semibold text-c-disabled pl-1',
    error: 'text-xs font-semibold text-red-500 pl-1',
    success: 'text-xs font-semibold text-emerald-500 pl-1',
  }

  const styles = variantStyles[variant] || variantStyles.default

  return <span className={cn(styles, className)}>{children}</span>
}
