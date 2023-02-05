import PropTypes from 'prop-types'
import { useEffect } from 'react'
import ThemeContext from './ThemeContext'
import useLocalStorage from '../hooks/useLocalStorage'
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [language, setLanguage] = useLocalStorage('language', 'id')

  useEffect(() => {
    if (theme === 'light') document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }, [theme])

  const contextValue = {
    currentTheme: theme,
    changeTheme: setTheme,
    currentLanguage: language,
    changeLanguage: setLanguage,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ThemeContextProvider
