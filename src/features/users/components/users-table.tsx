import { useState } from 'react'

import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation()

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
        title={t('users.table.noUsersTitle')}
        description={t('users.table.noUsersDescription')}
      />
    )
  }

  if (isLoading) {
    return <Loading text={t('users.table.loading')} />
  }

  return (
    <Card className="border-border/50 bg-background/70 overflow-hidden border shadow-sm backdrop-blur-xl">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('users.table.name')}</TableHead>

              <TableHead className="hidden md:table-cell">
                {t('users.table.email')}
              </TableHead>

              <TableHead className="hidden sm:table-cell">
                {t('users.table.roles')}
              </TableHead>

              <TableHead className="text-right">
                {t('users.table.actions')}
              </TableHead>
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
                        {t('users.table.userAccount')}
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
                        {t(`roles.${role.toLowerCase()}`)}
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
            {t('users.table.showing')}{' '}
            <span className="font-semibold text-foreground">
              {paginatedUsers.length}
            </span>{' '}
            {t('users.table.usersCount')}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(prev => prev - 1)}
            >
              {t('users.table.previous')}
            </Button>

            <div className="bg-background/70 border-border/50 rounded-2xl border px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur-xl sm:px-4">
              {t('users.table.page')} {page}
            </div>

            <Button
              variant="outline"
              size="sm"
              disabled={page * pageSize >= filteredUsers.length}
              onClick={() => setPage(prev => prev + 1)}
            >
              {t('users.table.next')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
