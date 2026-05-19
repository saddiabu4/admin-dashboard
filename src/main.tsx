import React from 'react'

import ReactDOM from 'react-dom/client'

import '@/app/styles/globals.css'

import '@/shared/i18n/i18n'

import { AppProviders } from '@/app/providers'

import { AppRouter } from '@/app/router/app-router'

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('@/mocks/browser')

    return worker.start()
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </React.StrictMode>,
  )
})
