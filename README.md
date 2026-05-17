# Enterprise Admin Dashboard

Modern enterprise-level admin dashboard built with React, TypeScript, TanStack Query, Zustand, TailwindCSS, and shadcn/ui.

## Live Demo

🔗 https://admin-dashboard-test-ebon.vercel.app/

---

# Features

## Authentication

- JWT-based mock authentication
- Login / Logout
- Persistent auth state with Zustand Persist
- Protected routes

## Role-Based Access Control (RBAC)

- ADMIN
- PAYMENT
- REPORTS
- Dynamic sidebar navigation
- Unauthorized route protection
- 403 Forbidden page

## Dashboard

- Statistics cards
- Revenue analytics
- Charts with Recharts
- Responsive layout

## Users Management

- Users table
- Real-time search
- Pagination
- Create user
- Edit user
- Delete confirmation dialog
- Form validation with Zod + React Hook Form

## Payments

- 50+ mock payments
- Search/filter
- Pagination
- Status badges

## Reports

- Revenue analytics
- Recharts integration
- Responsive charts

## UX Improvements

- Dark / Light mode
- Loading states
- Empty states
- Toast notifications
- Responsive sidebar
- Mobile-friendly UI

## Mock API

- MSW integration
- Simulated async requests
- Delayed responses for loading state testing

---

# Tech Stack

## Core

- React 19
- TypeScript
- Vite

## State Management

- TanStack Query
- Zustand

## Routing

- React Router DOM

## Forms & Validation

- React Hook Form
- Zod

## UI

- TailwindCSS
- shadcn/ui
- Lucide Icons

## Charts

- Recharts

## Mock API

- MSW (Mock Service Worker)

---

# Project Structure

```txt
src/
├── app/
├── features/
├── mocks/
├── pages/
├── shared/
├── widgets/
└── main.tsx
```

---

# Getting Started

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Build production version

```bash
npm run build
```

## Run lint

```bash
npm run lint
```

---

# Test Users

## ADMIN

```txt
Email: admin@test.com
Password: Admin@123
Roles: ADMIN, PAYMENT, REPORTS
```

## PAYMENT

```txt
Email: payment@test.com
Password: Payment@1
Roles: PAYMENT
```

## REPORTS

```txt
Email: reports@test.com
Password: Reports@1
Roles: REPORTS
```

## USER WITHOUT ROLE

```txt
Email: user@test.com
Password: User@1234
Behavior: Redirects to /403
```

---

# Functional Highlights

- Real-time filtering
- Pagination
- Protected routing
- Role-based navigation
- Persistent authentication
- Mock backend integration
- Reusable architecture
- Responsive design
- Modern SaaS UI

---

# Deployment

Project deployed on Vercel:

🔗 https://admin-dashboard-test-ebon.vercel.app/

---

# Author

Abdulatif
