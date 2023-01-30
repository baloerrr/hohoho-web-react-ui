import { useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)

      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (error) {
      console.log(error.message)
      return defaultValue
    }
  })
  const setValue = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error.message)
    }
    setStoredValue(value)
  }

  return [storedValue, setValue]
}

export default useLocalStorage
