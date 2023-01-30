import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import { useNavigate, redirect, Link } from 'react-router-dom'
import axios from 'axios'
// import { Login } from '@mui/icons-material'
// t { Restaurant } from '@mui/icons-material'

const Register = () => {
  const url = 'http://localhost:5000/api/'
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    password: '',
  })
  const [alertErr, setAlertErr] = useState('')
  const [alert, setAlert] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${url}auth/register`, inputs).then((res) => {
        if (res) {
          if (res.data) {
            console.log(res.data)
            setAlert(res.data.msg)
            setTimeout(() => {
              setAlert('')
            }, 3000)
          }
        }
      })
    } catch (error) {
      setAlertErr(error.response.data.msg)
      console.log(error.response)
      setTimeout(() => {
        setAlertErr('')
      }, 3000)(<Link to={<Register />}></Link>)
    }
  }

  return (
    <div className="register">
      <Header />
      <div className="hero min-h-screen bg-base-200 dark:bg-slate-800  transition-all">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body dark:bg-slate-800 dark:rounded-xl">
              <div className="pb-5 font-bold text-2xl dark:text-white transition-all text-base">
                <h3>Daftar Cuy!!!</h3>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  className="input input-bordered"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                {alertErr && (
                  <div
                    className="bg-red-300 border border-red-600 font-medium text-red-900 px-1 py-2 rounded relative"
                    role="alert"
                  >
                    <p>{alertErr}</p>
                  </div>
                )}
                {alert && (
                  <div
                    className="bg-blue-200 border border-blue-300 font-medium text-blue-900 px-1 py-2 rounded relative"
                    role="alert"
                  >
                    <p>{alert}</p>
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
