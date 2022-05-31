import { useRef } from 'react'

export default function useDebounce(callback, delay = 1500) {
  const timeOutRef = useRef(null)

  function debounceFunction(...params) {
    clearTimeout(timeOutRef.current)

    timeOutRef.current = setTimeout(() => {
      callback(...params)
    }, delay)
  }

  return debounceFunction
}
