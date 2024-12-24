import './globals.css'

import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'

import { Header, SideBar } from '@/components/.'

import { Providers } from './Providers'

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Task Burst',
    default: 'Task Burst',
  },
  authors: [{ name: 'Eduardo', url: 'https://github.com/MrRedu' }],
  creator: 'Mr Redu',
  description: `Optimize your time with our web app that combines task management, weather forecasting, and the Pomodoro technique. Create to-do lists, set reminders, and check the current weather to plan your day effectively. With an integrated Pomodoro timer, enhance your focus by working in productive intervals. Ideal for students and professionals looking to maximize productivity all in one place.`,
  keywords: [
    'Task',
    'Pomodoro',
    'Planning',
    'Weather',
    'Task Burst',
    'ToDo List',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} h-screen antialiased`}>
        <Providers>
          <div className="grid grid-cols-[auto_1fr] grid-rows-[3rem_calc(100vh-3rem-8px)] gap-x-2">
            <Header className="col-span-2" />
            <SideBar className="pl-2" />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
