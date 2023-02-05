import { createContext } from 'react'

const ThemeContext = createContext({
  currentTheme: 'light',
  changeTheme: () => {},
  currentLanguage: 'id',
  changeLanguage: (lang) => {},
})

export default ThemeContext
