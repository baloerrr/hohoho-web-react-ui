import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, loading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(username, password)
  }

  return (
    <div className="login">
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
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label font-medium">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={loading}
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
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
