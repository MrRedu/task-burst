import { cn } from '@/lib/utils'

interface FormItemProps {
  children: React.ReactNode
  className?: string
}

export const FormItem = ({ children, className }: FormItemProps) => {
  return <div className={cn('flex w-full flex-col', className)}>{children}</div>
}
