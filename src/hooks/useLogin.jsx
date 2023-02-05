import axios from 'axios'
import { useContext } from 'react'
import { useState } from 'react'
import AuthContext from '../context/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const [loading, setLoading] = useState(null)
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const login = async (username, password) => {
    setLoading(true)

    const data = {
      username: username,
      password: password,
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      )
      if (res) {
        if (res.data) {
          localStorage.setItem('user', JSON.stringify(res.data))
          dispatch({ type: 'LOGIN', payload: res.data })
          toast.success(res.data.msg, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
          setLoading(false)
          navigate('/')
        }
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.response.data.msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }

  return { login, loading }
}

export default useLogin
