interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <section
      className={`
    bg-c-space
    border-[3px] border-c-dark
    shadow-[4px_4px_0_0_rgba(5,5,5,1)]
    text-c-snow
    
    rounded-lg p-4 ${className}`}
    >
      {children}
    </section>
  );
};
