import { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: string
  label?: string
  placeholder?: string
  error?: { message?: string; type?: string }
  className?: string
  spellCheck?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      label,
      placeholder,
      className,
      error,
      spellCheck = true,
      ...props
    },
    ref
  ) => {
    const labelStyles = `text-sm font-semibold text-c-snow`
    const inputStyles = `
      w-full py-2 px-4 rounded-xl text-c-snow 
      bg-c-woodsmoke focus:bg-c-woodsmoke/75
      border-2 border-c-space
      focus:outline-none focus:ring-c-woodsmoke focus:ring-1 focus:border-c-space
      ${error?.message ? '!border-red-500' : ''} 
      ${className}
    `
    const helperTextStyles = `pl-2 font-semibold text-sm text-red-500`
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className={`${labelStyles}`} htmlFor={`${label} input`}>
            {label}
          </label>
        )}
        <input
          id={`${label} input`}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`${inputStyles} ${className}`}
          spellCheck={spellCheck}
          {...props}
        />
        {error?.message && (
          <span className={`${helperTextStyles}`}>{error.message}</span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
