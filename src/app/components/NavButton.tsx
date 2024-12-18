import Link from "next/link";

interface NavButtonProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  href?: string;
}

export const NavButton = ({
  icon: Icon,
  label,
  onClick,
  href,
}: NavButtonProps) => {
  const classStyle =
    "group flex h-10 w-10 justify-center items-center gap-2 rounded-lg hover:bg-zinc-800";
  if (href) {
    return (
      <Link
        href={href}
        className={`${classStyle}`}
        aria-label={label}
        target="_blank"
      >
        <Icon className="h-5 w-5 text-zinc-400 group-hover:text-zinc-100" />
      </Link>
    );
  }
  return (
    <button className={`${classStyle}`} onClick={onClick} aria-label={label}>
      <Icon className="h-5 w-5 text-zinc-400 group-hover:text-zinc-100" />
    </button>
  );
};
