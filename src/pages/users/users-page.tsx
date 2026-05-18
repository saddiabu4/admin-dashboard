import { useState } from 'react'

import { useDebounce } from '@/shared/hooks/use-debounce'

import { UsersTable } from '@/features/users/components/users-table'

import { CreateUserDialog } from '@/features/users/components/create-user-dialog'

import { Input } from '@/shared/ui/input'

export function UsersPage() {
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search)
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold sm:text-3xl">Users</h1>

          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Manage platform users and permissions.
          </p>
        </div>

        <CreateUserDialog />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Input
          placeholder="Search users..."
          className="w-full max-w-sm"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </div>

      <UsersTable search={debouncedSearch} />
    </div>
  )
}
