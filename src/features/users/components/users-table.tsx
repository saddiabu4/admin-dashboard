import { useUsers } from '../hooks/use-users'

import { Badge } from '@/shared/ui/badge'

import { Card, CardContent } from '@/shared/ui/card'

import { Skeleton } from '@/shared/ui/skeleton'

import { DeleteUserDialog } from './delete-user-dialog'

import { EditUserDialog } from './edit-user-dialog'

import { EmptyState } from '@/shared/ui/empty-state'

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

  const filteredUsers =
    data?.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`

      return (
        fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      )
    }) ?? []

  if (!filteredUsers.length) {
    return (
      <EmptyState
        title="No users found"
        description="Try searching with a different keyword."
      />
    )
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />

        <Skeleton className="h-12 w-full" />

        <Skeleton className="h-12 w-full" />
      </div>
    )
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
            {filteredUsers.map(user => (
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
      </CardContent>
    </Card>
  )
}
