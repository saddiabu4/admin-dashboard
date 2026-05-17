import { Pencil } from 'lucide-react'

import { UserForm } from './user-form'

import {
  Dialog,
  DialogContent,
  DialogDescription,
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
        <button className="hover:bg-indigo-500/10 hover:text-indigo-500 flex items-center justify-center rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:scale-105 hover:border-indigo-500/20">
          <Pencil className="size-4" />
        </button>
      </DialogTrigger>

      <DialogContent className="border-border/50 bg-background/80 sm:max-w-lg backdrop-blur-2xl">
        <DialogHeader className="space-y-3">
          <div className="flex size-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
            <Pencil className="size-6" />
          </div>

          <div>
            <DialogTitle className="text-2xl font-bold tracking-tight">
              Edit User
            </DialogTitle>

            <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Update the selected user details and permissions.
            </DialogDescription>
          </div>
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
