import Input from '../components/UI/input'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
      <div className="relative w-full min-h-screen font-nunito bg-light-secondary dark:bg-slate-800 text-dark-gray dark:text-white">
        <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-full max-w-3xl md:max-w-2xl px-3">
          <div className="pb-5 font-bold transition-all ">
            <h1 className=" text-3xl md:text-5xl text-cyan font-bold py-4 text-primary ">
              Hoh😐ho
            </h1>
            <p className="text-lg md:text-2xl tracking-wide text-gray-700 dark:text-gray-400">
              <strong className="text-xl md:text-3xl">Welcome back!</strong>{' '}
              let's sign in to see your notes
            </p>
          </div>
          <form className="flex flex-col w-full py-3">
            <Input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              disabled={loading}
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </form>
          <div className="form-control">
            <p className="text-sm md:text-base p-3 text-dark dark:text-light-secondary tracking-wide">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-400 hover:underline">
                Sign Up
              </Link>{' '}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
