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
import { useModal } from "@/hooks/useModal";
import { Modal } from "./ui/Modal";
import { NavButton } from "./NavButton";
import { HelpModal } from "./modals/HelpModal";
import { SettingsModal } from "./modals/SettingsModal";

interface SidebarProps {
  className?: string;
}

export function SideBar({ className }: SidebarProps) {
  // const { isOpen, openModal, closeModal, modalRef } = useModal();
  const helpModal = useModal();
  const settingsModal = useModal();

  const NAV_BUTTONS = [
    {
      icon: Edit3,
      label: "Edit",
      onClick: () => {},
    },
    {
      icon: Save,
      label: "Save",
      href: "/save",
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
      onClick: settingsModal.openModal,
    },
  ];

  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
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
                className={`h-5 w-5 text-zinc-400 transform transition-transform duration-300 
            ${isCollapsed ? "-rotate-90" : "rotate-90"}`}
              />
            </button>
            <div className="h-[1px] bg-zinc-800" />
            {NAV_BUTTONS.map((item) => (
              <NavButton
                key={item.label}
                icon={item.icon}
                label={item.label}
                onClick={item.onClick ? item.onClick : undefined}
                href={item.href ? item.href : undefined}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[1px] bg-zinc-800" />
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
        ${isCollapsed ? "w-[0px]" : "w-[240px] p-2"}
        "
      `}
        >
          <p>right</p>
        </section>
      </aside>
      {/* Configuration Modal */}
      {settingsModal.isOpen && (
        <Modal
          onClose={settingsModal.closeModal}
          modalRef={settingsModal.modalRef}
          blur
          size="lg"
        >
          <SettingsModal />
        </Modal>
      )}
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
