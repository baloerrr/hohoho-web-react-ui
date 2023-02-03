import React from 'react'
import { useState } from 'react'
import useSignUp from '../hooks/useSignUp'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { signup, loading } = useSignUp()

  const handleSubmit = async (e) => {
    await signup(username, password)
  }

  return (
    <div className="register">
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
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div></div>
              <div className="form-control mt-6">
                <button
                  disabled={loading}
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
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
