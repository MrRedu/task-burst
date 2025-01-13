import { cn } from '@/lib/utils'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
  children: React.ReactNode
  isRequired?: boolean
}
export const Label = ({
  children,
  htmlFor,
  isRequired = false,
  className,
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('flex items-center gap-1 text-sm font-bold', className)}
    >
      {children}
      {isRequired && <span className="text-red-500">*</span>}
    </label>
  )
}
