'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Github,
  Grid,
  HelpCircle,
  PanelTopOpen,
  Save,
  Settings,
  SplitSquareVertical,
  Trophy,
} from 'lucide-react'
import { useState } from 'react'

import { useModal } from '@/hooks/useModal'

import { HelpModal } from './modals/HelpModal'
import { NavButton } from './NavButton'
import { HabitsTab } from './tabs/HabitsTab'
import { SettingsTab } from './tabs/SettingsTab'
import { Modal } from './ui/Modal'

interface SidebarProps {
  className?: string
}

type NavButton = {
  icon: React.ElementType
  label: string
  onClick?: () => void
  href?: string
  isSelected?: boolean
}

const SecondTab = () => {
  return <div className="text-bold text-lg text-c-snow">SecondTab</div>
}

export function SideBar({ className }: SidebarProps) {
  // const { isOpen, openModal, closeModal, modalRef } = useModal();
  const helpModal = useModal()

  const NAV_BUTTONS: NavButton[] = [
    {
      icon: Trophy,
      label: 'Habits',
      onClick: () => handleTabClick('Habits'),
    },
    {
      icon: Save,
      label: 'Second',
      onClick: () => handleTabClick('Second'),
    },
    {
      icon: Grid,
      label: 'Dashboard',
    },
    {
      icon: Code2,
      label: 'Code',
    },
    {
      icon: SplitSquareVertical,
      label: 'Split View',
    },
    {
      icon: Settings,
      label: 'Settings',
      onClick: () => handleTabClick('Settings'),
    },
  ]

  const [isCollapsed, setIsCollapsed] = useState(true)
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  const [selectedTab, setSelectedTab] = useState(NAV_BUTTONS[0].label)
  const handleTabClick = (tab: string) => {
    const isSameTab = tab === selectedTab
    setSelectedTab(tab)
    if (isCollapsed || isSameTab) {
      handleCollapse()
    }
  }

  return (
    <>
      <aside
        className={`flex h-full ${
          isCollapsed ? 'gap-0' : 'gap-2'
        } ${className}`}
      >
        <section className="flex h-full flex-col justify-between rounded-xl bg-c-woodsmoke p-2">
          <div className="flex flex-col gap-2">
            <button
              onClick={handleCollapse}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-zinc-800"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <PanelTopOpen
                className={`h-5 w-5 transform text-c-snow transition-transform duration-300 ${isCollapsed ? '-rotate-90' : 'rotate-90'}`}
              />
            </button>
            <div className="h-[2px] bg-zinc-700" />
            {NAV_BUTTONS.map(item => (
              <NavButton
                key={item.label}
                icon={item.icon}
                label={item.label}
                onClick={item?.onClick && item?.onClick}
                href={item?.href && item?.href}
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
        {/* Here */}
        <motion.div
          className={`overflow-hidden rounded-xl bg-c-woodsmoke`}
          initial={isCollapsed ? 'collapsed' : 'expanded'}
          animate={isCollapsed ? 'collapsed' : 'expanded'}
          variants={{
            expanded: { width: '360px', scale: 1, opacity: 1 },
            collapsed: { width: '0', scale: 0.95, opacity: 0.4 },
          }}
          transition={{ duration: 0.3 }}
        >
          {selectedTab === 'Habits' && <HabitsTab />}
          {selectedTab === 'Second' && <SecondTab />}
          {selectedTab === 'Settings' && <SettingsTab />}
        </motion.div>
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
  )
}
