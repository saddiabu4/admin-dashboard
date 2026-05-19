import { UserPlus } from 'lucide-react'

import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-11 px-5 text-sm font-semibold shadow-lg shadow-indigo-500/20">
          <UserPlus className="size-4" />
          {t('users.actions.create')}
        </Button>
      </DialogTrigger>

      <DialogContent className="border-border/50 bg-background/80 sm:max-w-lg backdrop-blur-2xl">
        <DialogHeader className="space-y-3">
          <div className="flex size-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
            <UserPlus className="size-6" />
          </div>

          <div>
            <DialogTitle className="text-2xl font-bold tracking-tight">
              {t('users.dialog.createTitle')}
            </DialogTitle>

            <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {t('users.dialog.createDescription')}
            </DialogDescription>
          </div>
        </DialogHeader>

        <UserForm />
      </DialogContent>
    </Dialog>
  )
}
