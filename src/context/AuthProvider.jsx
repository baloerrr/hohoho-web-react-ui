import AuthContext from './AuthContext'
import authReducer from '../hooks/useAuthReducer'
import { useReducer, useState } from 'react'
import { useEffect } from 'react'

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user })
    }
  }, [])

  console.log('Auth context state', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
