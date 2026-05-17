import type { PropsWithChildren } from 'react'

import { Header } from './header'

import { Sidebar } from './sidebar'

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-background relative flex h-screen overflow-hidden">
      <Sidebar />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute bottom-[-250px] right-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 ml-72 flex flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
