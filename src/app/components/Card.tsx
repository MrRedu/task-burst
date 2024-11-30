export const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <section className={`bg-snow shadow rounded-lg p-4 ${className}`}>
      {children}
    </section>
  )
};
