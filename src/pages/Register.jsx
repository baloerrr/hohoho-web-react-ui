import Input from '../components/UI/input'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignUp from '../hooks/useSignUp'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { signup, loading } = useSignUp()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(username, password)
  }

  return (
    <div className="register">
      <div className="relative w-full min-h-screen font-nunito bg-light-secondary dark:bg-slate-800 text-dark-gray dark:text-white transition-all">
        <div className="fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-full max-w-3xl md:max-w-2xl px-3">
          <div className="pb-5 font-bold transition-all ">
            <h1 className=" text-3xl md:text-5xl text-cyan font-bold py-4 text-primary ">
              Hoh😐ho
            </h1>
            <p className="text-lg md:text-2xl tracking-wide text-gray-700 dark:text-gray-400">
              <strong className="text-xl md:text-3xl">Holaa!</strong> let's
              create your new account and feel a new experience with noto.
            </p>
          </div>
          <div className="form-control">
            <Input
              type="text"
              placeholder="Username"
              name="username"
              className=" w-full bg-transparent border border-dark-secondary dark:border-light-secondary p-3 md:p-4 text-base md:text-xl rounded-md my-3"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <Input
              type="password"
              placeholder="password"
              name="password"
              className="w-full bg-transparent border border-dark-secondary dark:border-light-secondary p-3 md:p-4 text-base md:text-xl rounded-md my-3"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div></div>
          <div className="form-control ">
            <button
              disabled={loading}
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <p className="text-sm md:text-base p-3 text-dark dark:text-light-secondary tracking-wide">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign In
              </Link>{' '}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
