"use client";

import { useState } from "react";
import {
  Code2,
  Edit3,
  Github,
  Grid,
  HelpCircle,
  PanelTopOpen,
  Save,
  Settings,
  SplitSquareVertical,
} from "lucide-react";
import Link from "next/link";

export function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <aside
      className={`
        flex h-full flex-col justify-between 
        bg-bg-secondary p-2 transition-all duration-300
        rounded-xl
        ${isCollapsed ? "w-[60px]" : "w-[240px]"}
      `}
    >
      <div className="flex flex-col gap-2">
        <button
          onClick={handleCollapse}
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-zinc-800"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <PanelTopOpen className={`h-5 w-5 text-zinc-400 transform transition-transform duration-300 
            ${isCollapsed ? '-rotate-90' : 'rotate-90'}`} />
        </button>
        <div className="h-[1px] bg-zinc-800" />
        <NavButton icon={Edit3} label="Edit" />
        <NavButton icon={Save} label="Save" />
        <NavButton icon={Grid} label="Dashboard" />
        <NavButton icon={Code2} label="Code" />
        <NavButton icon={SplitSquareVertical} label="Split View" />
        <NavButton icon={Settings} label="Settings" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-[1px] bg-zinc-800" />
        <NavButton icon={HelpCircle} label="Help" />
        <NavButton icon={Github} label="GitHub" href="https://github.com/MrRedu/task-burst" />
      </div>
    </aside>
  );
}

function NavButton({
  icon: Icon,
  label,
  href
}: {
  icon: React.ElementType;
  label: string;
  href?: string
}) {
  const classStyle = "group flex h-10 w-10 justify-center items-center gap-2 rounded-lg hover:bg-zinc-800"
  if (href) {
    return (
      <Link
        href={href}
        className={`${classStyle}`}
        aria-label={label}
        target="_blank"
      >
        <Icon className="h-5 w-5 text-zinc-400 group-hover:text-zinc-100" />
        {/* <span className="text-sm text-zinc-400 group-hover:text-zinc-100">
          {label}
        </span> */}
      </Link>
    )
  }
  return (
    <button
      className={`${classStyle}`}
      aria-label={label}
    >
      <Icon className="h-5 w-5 text-zinc-400 group-hover:text-zinc-100" />
      {/* <span className="text-sm text-zinc-400 group-hover:text-zinc-100">
        {label}
      </span> */}
    </button>
  );
}
