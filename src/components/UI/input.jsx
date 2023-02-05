import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Input = ({ type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const passwordType = showPassword ? 'text' : 'password'

  return (
    <div className="relative">
      <input
        type={type === 'password' ? passwordType : type}
        className={`w-full bg-transparent border border-dark-secondary dark:text-white dark:border-light-secondary p-3 md:p-4 text-base md:text-xl rounded-md my-3`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <div
          className="absolute top-[50%] -translate-y-2/4 right-5 p-2 md:p-3 border rounded-md dark:text-white cursor-pointer hover:text-primary "
          onClick={toggleShowPassword}
        >
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </div>
      )}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
