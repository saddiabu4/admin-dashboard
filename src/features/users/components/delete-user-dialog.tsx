import { Trash2 } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'

import { Button } from '@/shared/ui/button'

type DeleteUserDialogProps = {
  userName: string
}

export function DeleteUserDialog({ userName }: DeleteUserDialogProps) {
  function handleDelete() {
    console.log('delete user')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:bg-muted rounded-lg p-2 text-red-500 transition-colors">
          <Trash2 className="size-4" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>

          <DialogDescription>
            Are you sure you want to delete{' '}
            <span className="font-semibold">{userName}</span>? This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>

          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
