import { useState } from 'react'

import { useUsers } from '../hooks/use-users'

import { Badge } from '@/shared/ui/badge'

import { Button } from '@/shared/ui/button'

import { Card, CardContent } from '@/shared/ui/card'

import { DeleteUserDialog } from './delete-user-dialog'

import { EditUserDialog } from './edit-user-dialog'

import { EmptyState } from '@/shared/ui/empty-state'

import { Loading } from '@/shared/ui/loading'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table'

type UsersTableProps = {
  search: string
}

export function UsersTable({ search }: UsersTableProps) {
  const { data, isLoading } = useUsers()

  const [page, setPage] = useState(1)

  const pageSize = 10

  const filteredUsers =
    data?.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`

      return (
        fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      )
    }) ?? []

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * pageSize,
    page * pageSize,
  )

  if (!filteredUsers.length) {
    return (
      <EmptyState
        title="No users found"
        description="Try searching with a different keyword."
      />
    )
  }

  if (isLoading) {
    return <Loading text="Loading users..." />
  }

  return (
    <Card className="border-border/50 bg-background/70 overflow-hidden border shadow-sm backdrop-blur-xl">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>

              <TableHead className="hidden md:table-cell">Email</TableHead>

              <TableHead className="hidden sm:table-cell">Roles</TableHead>

              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedUsers.map(user => (
              <TableRow key={user.id}>
                <TableCell className="font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-indigo-500/20 sm:size-10">
                      {user.firstName[0]}
                      {user.lastName[0]}
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold">
                        {user.firstName} {user.lastName}
                      </p>

                      <p className="text-muted-foreground truncate text-xs">
                        User Account
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell className="text-muted-foreground hidden md:table-cell">
                  {user.email}
                </TableCell>

                <TableCell className="hidden sm:table-cell">
                  <div className="flex flex-wrap gap-2">
                    {user.roles.map(role => (
                      <Badge
                        key={role}
                        variant="secondary"
                        className="rounded-xl border border-indigo-500/10 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500"
                      >
                        {role}
                      </Badge>
                    ))}
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <EditUserDialog user={user} />

                    <DeleteUserDialog
                      userName={`${user.firstName} ${user.lastName}`}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="border-border/50 flex flex-col gap-4 border-t p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="text-muted-foreground text-sm">
            Showing{' '}
            <span className="font-semibold text-foreground">
              {paginatedUsers.length}
            </span>{' '}
            users
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(prev => prev - 1)}
            >
              Previous
            </Button>

            <div className="bg-background/70 border-border/50 rounded-2xl border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur-xl sm:px-4">
              Page {page}
            </div>

            <Button
              variant="outline"
              size="sm"
              disabled={page * pageSize >= filteredUsers.length}
              onClick={() => setPage(prev => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
