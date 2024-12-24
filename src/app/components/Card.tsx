interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <section
      className={`overflow-hidden rounded-xl border-[3px] border-c-dark bg-c-space p-4 text-c-snow shadow-[4px_4px_0_0_rgba(5,5,5,1)] ${className}`}
    >
      {children}
    </section>
  )
}
