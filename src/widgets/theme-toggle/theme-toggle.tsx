import { Moon, Sun } from 'lucide-react'

import { useTheme } from 'next-themes'

import { Button } from '@/shared/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  function toggleTheme() {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}
