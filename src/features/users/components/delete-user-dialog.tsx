import { Trash2 } from 'lucide-react'

import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  function handleDelete() {
    console.log('delete user')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:bg-red-500/10 hover:text-red-500 flex items-center justify-center rounded-2xl border border-transparent p-2.5 text-red-500 transition-all duration-300 hover:scale-105 hover:border-red-500/20">
          <Trash2 className="size-4" />
        </button>
      </DialogTrigger>

      <DialogContent className="border-border/50 bg-background/80 sm:max-w-md backdrop-blur-2xl">
        <DialogHeader className="space-y-4">
          <div className="flex size-14 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg shadow-red-500/30">
            <Trash2 className="size-6" />
          </div>

          <div>
            <DialogTitle className="text-2xl font-bold tracking-tight">
              {t('users.dialog.deleteTitle')}
            </DialogTitle>

            <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {t('users.dialog.deleteDescription', {
                name: <span className="font-semibold text-foreground">{userName}</span>,
              })}
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" className="min-w-24">
            {t('users.actions.cancel')}
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            className="min-w-24"
          >
            {t('users.actions.delete')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
