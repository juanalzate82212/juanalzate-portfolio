import { useState, useEffect } from 'react'

interface UseTypewriterProps {
  text: string
  speed?: number
  delay?: number
}

export function useTypewriter({ text, speed = 80, delay = 400 }: UseTypewriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayed, done }
}