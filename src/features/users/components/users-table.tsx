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
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>

              <TableHead>Email</TableHead>

              <TableHead>Roles</TableHead>

              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedUsers.map(user => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  {user.firstName} {user.lastName}
                </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>
                  <div className="flex flex-wrap gap-2">
                    {user.roles.map(role => (
                      <Badge key={role} variant="secondary">
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

        <div className="flex items-center justify-end gap-3 border-t p-4">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage(prev => prev - 1)}
          >
            Previous
          </Button>

          <span className="text-sm font-medium">Page {page}</span>

          <Button
            variant="outline"
            disabled={page * pageSize >= filteredUsers.length}
            onClick={() => setPage(prev => prev + 1)}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
