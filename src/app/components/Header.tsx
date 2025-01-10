import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={`flex h-full w-full items-center justify-between px-2 text-white ${className}`}
    >
      <Link href={'/'} className="flex gap-2">
        <Image src="/isotipo.svg" alt="logo" width={16} height={16} />
        <h1 className="text-md font-black">Task Burst</h1>
      </Link>

      {/* <Link href={"https://github.com/MrRedu/task-burst"} className="flex items-center gap-2">
        GitHub
      </Link> */}
    </header>
  )
}
