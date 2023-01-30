import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate('/')
    } catch (error) {
      navigate('/login')
      console.log(error.message)
    }
  }

  return (
    <div className="login">
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="pb-5 font-bold text-2xl text-primary">
                <h3>Login Cuy!!!</h3>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  className="input input-bordered"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  onChange={handleChange}
                />
                <label className="label font-medium">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* <div>
                {alert && (
                  <div
                    className="bg-red-300 border border-red-600 font-medium text-red-900 px-1 py-2 rounded relative"
                    role="alert"
                  >
                    <p>{alert}</p>
                  </div>
                )}
              </div> */}
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Mashookk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
