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
        <Button className="h-11 px-5 text-sm font-semibold shadow-lg shadow-indigo-500/20">
          <UserPlus className="size-4" />
          Create User
        </Button>
      </DialogTrigger>

      <DialogContent className="border-border/50 bg-background/80 sm:max-w-lg backdrop-blur-2xl">
        <DialogHeader className="space-y-3">
          <div className="flex size-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
            <UserPlus className="size-6" />
          </div>

          <div>
            <DialogTitle className="text-2xl font-bold tracking-tight">
              Create User
            </DialogTitle>

            <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Enter the new user details and assign their roles.
            </DialogDescription>
          </div>
        </DialogHeader>

        <UserForm />
      </DialogContent>
    </Dialog>
  )
}
