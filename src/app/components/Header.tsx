import Image from "next/image"
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-12 px-4  text-white">

      <Link href={"/"} className="flex gap-2">
        <Image src="/isotipo.svg" alt="logo" width={16} height={16} />
        <h1 className="text-md font-black">Task Burst</h1>
      </Link>

      {/* <Link href={"https://github.com/MrRedu/task-burst"} className="flex items-center gap-2">
        GitHub
      </Link> */}

    </header>
  )
};
