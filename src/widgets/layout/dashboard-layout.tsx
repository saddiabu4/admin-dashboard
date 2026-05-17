import type { PropsWithChildren } from 'react'

import { Header } from './header'

import { Sidebar } from './sidebar'

export function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-muted/30 flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
