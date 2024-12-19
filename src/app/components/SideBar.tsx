"use client";

import { useState } from "react";
import {
  Code2,
  Trophy,
  Github,
  Grid,
  HelpCircle,
  PanelTopOpen,
  Save,
  Settings,
  SplitSquareVertical,
} from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { Modal } from "./ui/Modal";
import { NavButton } from "./NavButton";
import { HelpModal } from "./modals/HelpModal";
import { HabitsTab } from "./tabs/HabitsTab";
import { SettingsTab } from "./tabs/SettingsTab";

interface SidebarProps {
  className?: string;
}

type NavButton = {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  href?: string;
  isSelected?: boolean;
};

const SecondTab = () => {
  return <div className="text-c-snow text-bold text-lg">SecondTab</div>;
};

export function SideBar({ className }: SidebarProps) {
  // const { isOpen, openModal, closeModal, modalRef } = useModal();
  const helpModal = useModal();

  const NAV_BUTTONS: NavButton[] = [
    {
      icon: Trophy,
      label: "Habits",
      onClick: () => handleTabClick("Habits"),
    },
    {
      icon: Save,
      label: "Second",
      onClick: () => handleTabClick("Second"),
    },
    {
      icon: Grid,
      label: "Dashboard",
    },
    {
      icon: Code2,
      label: "Code",
    },
    {
      icon: SplitSquareVertical,
      label: "Split View",
    },
    {
      icon: Settings,
      label: "Settings",
      onClick: () => handleTabClick("Settings"),
    },
  ];

  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [selectedTab, setSelectedTab] = useState(NAV_BUTTONS[0].label);
  const handleTabClick = (tab: string) => {
    const isSameTab = tab === selectedTab;
    setSelectedTab(tab);
    if (isCollapsed || isSameTab) {
      handleCollapse();
    }
  };

  return (
    <>
      <aside
        className={`flex h-full ${
          isCollapsed ? "gap-0" : "gap-2"
        } ${className}`}
      >
        <section
          className="flex h-full flex-col justify-between 
        bg-c-woodsmoke p-2 rounded-xl"
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={handleCollapse}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-zinc-800"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <PanelTopOpen
                className={`h-5 w-5 text-c-snow transform transition-transform duration-300 
            ${isCollapsed ? "-rotate-90" : "rotate-90"}`}
              />
            </button>
            <div className="h-[2px] bg-zinc-700" />
            {NAV_BUTTONS.map((item) => (
              <NavButton
                key={item.label}
                icon={item.icon}
                label={item.label}
                onClick={item?.onClick ? item?.onClick : undefined}
                href={item?.href ? item?.href : undefined}
                isSelected={selectedTab === item.label && !isCollapsed}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[2px] bg-zinc-700" />
            <NavButton
              icon={HelpCircle}
              label="Help"
              onClick={helpModal.openModal}
            />
            <NavButton
              icon={Github}
              label="GitHub"
              href="https://github.com/MrRedu/task-burst"
            />
          </div>
        </section>
        <section
          className={`
      bg-c-woodsmoke transition-all duration-300
        rounded-xl
        ${isCollapsed ? "w-0 overflow-hidden" : "w-[360px]"}
        "
      `}
        >
          {selectedTab === "Habits" && <HabitsTab />}
          {selectedTab === "Second" && <SecondTab />}
          {selectedTab === "Settings" && <SettingsTab />}
        </section>
      </aside>

      {/* Help Modal */}
      {helpModal.isOpen && (
        <Modal
          onClose={helpModal.closeModal}
          modalRef={helpModal.modalRef}
          blur
          size="lg"
        >
          <HelpModal />
        </Modal>
      )}
    </>
  );
}
