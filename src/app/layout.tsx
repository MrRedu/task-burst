import type { Metadata } from "next";
import { Quicksand } from 'next/font/google'

import "./globals.css";
import { Providers } from "./Providers";

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
  keywords: ['Task', 'Pomodoro', 'Planning', 'Weather', 'Task Burst', 'ToDo List'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased h-screen `}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
