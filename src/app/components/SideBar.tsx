'use client'

import { motion } from 'framer-motion'
import {
  ClockAlert,
  HelpCircle,
  ListTodo,
  PanelTopOpen,
  Settings,
} from 'lucide-react'
import { useState } from 'react'

import { useModal } from '@/hooks/useModal'

import { HelpModal } from './modals/HelpModal'
import { NavButton } from './NavButton'
import { HabitsTab } from './tabs/HabitsTab'
import { SettingsTab } from './tabs/SettingsTab'
import { TimeZonesTab } from './tabs/TimeZonesTab'
import { Modal } from './ui/Modal'
import { useWindowSize } from '../hooks/useWindowSize'
import { Drawer } from './ui/Drawer'

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

export function SideBar({ className }: SidebarProps) {
  // const { isOpen, openModal, closeModal, modalRef } = useModal();
  const helpModal = useModal()
  const { width } = useWindowSize()

  const NAV_BUTTONS = [
    {
      icon: ListTodo,
      label: 'Habits',
      onClick: () => handleTabClick('Habits'),
    },
    {
      icon: ClockAlert,
      label: 'Second',
      onClick: () => handleTabClick('TimeZones'),
    },
  ]

  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  const [selectedTab, setSelectedTab] = useState(NAV_BUTTONS[0].label)
  const handleTabClick = (tab: string) => {
    const isSameTab = tab === selectedTab
    setSelectedTab(tab)

    if (width < 1024) {
      handleDrawer()
      return
    }

    if (isCollapsed || isSameTab) {
      handleCollapse()
    }
  }

  return (
    <>
      <aside
        className={`flex h-[56px] lg:h-full ${isCollapsed ? 'gap-0' : 'gap-2'} ${className}`}
      >
        <section className="flex h-fit w-full justify-between rounded-xl bg-c-woodsmoke p-2 lg:h-full lg:w-fit lg:flex-col">
          <div className="flex w-fit gap-2 lg:flex-col">
            <button
              type="button"
              onClick={() => handleTabClick(selectedTab)}
              className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-zinc-800"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <PanelTopOpen
                className={`h-5 w-5 transform text-c-snow transition-transform duration-300 ${isCollapsed ? 'rotate-180 lg:-rotate-90' : 'lg:rotate-90'} `}
              />
            </button>
            <div className="h-full w-[2px] bg-zinc-700 lg:h-[2px] lg:w-full" />
            {NAV_BUTTONS.map(item => (
              <NavButton
                key={item.label}
                icon={item.icon}
                label={item.label}
                onClick={item?.onClick && item?.onClick}
                // href={item?.href && item?.href}
                isSelected={selectedTab === item.label && !isCollapsed}
              />
            ))}
          </div>
          <div className="flex w-fit gap-2 lg:flex-col">
            <div className="h-full w-[2px] bg-zinc-700 lg:h-[2px] lg:w-full" />
            <NavButton
              icon={HelpCircle}
              label="Help"
              onClick={helpModal.openModal}
            />
            <NavButton
              icon={Settings}
              label="Settings"
              onClick={() => handleTabClick('Settings')}
            />
          </div>
        </section>
        {width > 1024 && (
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
            {selectedTab === 'TimeZones' && <TimeZonesTab />}
            {selectedTab === 'Settings' && <SettingsTab />}
          </motion.div>
        )}
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
      {/* Drawer  */}
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawer} blur>
        {selectedTab === 'Habits' && <HabitsTab />}
        {selectedTab === 'TimeZones' && <TimeZonesTab />}
        {selectedTab === 'Settings' && <SettingsTab />}
      </Drawer>
    </>
  )
}
