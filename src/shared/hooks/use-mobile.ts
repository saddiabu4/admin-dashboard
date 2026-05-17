import { useEffect, useState } from 'react'

export function useMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    const handleChange = () => {
      setIsMobile(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return isMobile
}
