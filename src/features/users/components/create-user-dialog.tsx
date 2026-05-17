import { UserPlus } from 'lucide-react'

import { UserForm } from './user-form'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'

import { Button } from '@/shared/ui/button'

export function CreateUserDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 size-4" />
          Create User
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>

          <DialogDescription>
            Enter the new user details and assign their roles.
          </DialogDescription>
        </DialogHeader>

        <UserForm />
      </DialogContent>
    </Dialog>
  )
}
