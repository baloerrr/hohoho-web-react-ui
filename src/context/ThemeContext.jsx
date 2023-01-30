import { createContext } from 'react'

const ThemeContext = createContext({
  currentTheme: 'light',
  changeTheme: () => {},
})

export default ThemeContext
