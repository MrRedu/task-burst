'use client'

import { motion } from 'framer-motion'
import { Bug, ClockAlert, ListTodo, PanelTopOpen, Settings } from 'lucide-react'
import { useState } from 'react'

import { HabitsTab } from '@/components/tabs/HabitsTab'
import { SettingsTab } from '@/components/tabs/SettingsTab'
import { TimeZonesTab } from '@/components/tabs/TimeZonesTab'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { Drawer } from '@/components/ui/Drawer'
import { useWindowSize } from '@/hooks/useWindowSize'

interface SidebarProps {
  className?: string
}

const TABS = [
  {
    icon: ListTodo,
    label: 'Habits',
  },
  {
    icon: ClockAlert,
    label: 'TimeZones',
  },
  {
    icon: Bug,
    label: 'Test',
  },
]

export function SideBar({ className }: SidebarProps) {
  const { width } = useWindowSize()

  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  const [selectedTab, setSelectedTab] = useState(TABS[0].label)
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
            <AnimatedBackground
              defaultValue={TABS[0].label}
              className={`flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800`}
              transition={{
                ease: 'easeInOut',
                duration: 0.2,
              }}
              onValueChange={tabSelected => {
                handleTabClick(tabSelected as string)
              }}
            >
              {TABS.map((tab, index) => (
                <button
                  key={index}
                  data-id={tab.label} // --> This is tabSelected
                  type="button"
                  aria-label={`${tab.label} view`}
                  className="flex h-10 w-10 items-center justify-center gap-2 rounded-lg"
                >
                  <tab.icon
                    className={`h-5 w-5 text-c-disabled ${
                      selectedTab === tab.label && !isCollapsed
                        ? 'text-c-snow'
                        : ''
                    }`}
                  />
                </button>
              ))}
            </AnimatedBackground>
          </div>
          <div className="flex w-fit gap-2 lg:flex-col">
            <div className="h-full w-[2px] bg-zinc-700 lg:h-[2px] lg:w-full" />
            <button
              type="button"
              aria-label={`Settings view`}
              className={`flex h-10 w-10 items-center justify-center gap-2 rounded-lg ${selectedTab === 'Settings' && !isCollapsed ? 'bg-zinc-800' : ''}`}
              onClick={() => handleTabClick('Settings')}
            >
              <Settings
                className={`h-5 w-5 text-c-disabled ${
                  selectedTab === 'Settings' && !isCollapsed
                    ? 'text-c-snow'
                    : ''
                }`}
              />
            </button>
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

      {/* Drawer  */}
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawer} blur>
        {selectedTab === 'Habits' && <HabitsTab />}
        {selectedTab === 'TimeZones' && <TimeZonesTab />}
        {selectedTab === 'Settings' && <SettingsTab />}
      </Drawer>
    </>
  )
}
