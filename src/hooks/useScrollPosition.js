import { useEffect, useState } from 'react'

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const update = () => {
      setScrollY(window.scrollY || window.pageYOffset || 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return scrollY
}
