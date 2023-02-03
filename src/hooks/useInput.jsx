import { useReducer } from 'react'
import PropTypes from 'prop-types'

const initialInputState = {
  value: '',
  isTouched: false,
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched }
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' }
  }
  return inputStateReducer
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState,
  )

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    reset,
  }
}

useInput.propTypes = {
  validateValue: PropTypes.func.isRequired,
}

export default useInput
