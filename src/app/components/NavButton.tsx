import Link from 'next/link'

interface NavButtonProps {
  icon: React.ElementType
  label: string
  onClick?: () => void
  href?: string
  isSelected?: boolean
}

export const NavButton = ({
  icon: Icon,
  label,
  onClick,
  href,
  isSelected,
}: NavButtonProps) => {
  const linkStyles = `group flex h-10 w-10 justify-center items-center gap-2 rounded-lg hover:bg-zinc-800 ${
    isSelected ? 'bg-zinc-800' : ''
  }`
  const iconStyles = `h-5 w-5 text-c-disabled group-hover:text-zinc-100 ${
    isSelected ? 'text-c-snow' : ''
  }`

  if (href) {
    return (
      <Link
        href={href}
        className={`${linkStyles}`}
        aria-label={label}
        target="_blank"
      >
        <Icon className={`${iconStyles}`} />
      </Link>
    )
  }
  return (
    <button
      type="button"
      className={`${linkStyles}`}
      onClick={onClick}
      aria-label={label}
    >
      <Icon className={`${iconStyles}`} />
    </button>
  )
}
