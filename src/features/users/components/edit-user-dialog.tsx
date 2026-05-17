import { Pencil } from 'lucide-react'

import { UserForm } from './user-form'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'

type EditUserDialogProps = {
  user: {
    firstName: string

    lastName: string

    email: string

    password?: string

    roles: string[]
  }
}

export function EditUserDialog({ user }: EditUserDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:bg-muted rounded-lg p-2 transition-colors">
          <Pencil className="size-4" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <UserForm
          defaultValues={{
            firstName: user.firstName,

            lastName: user.lastName,

            email: user.email,

            password: '',

            roles: user.roles,
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
