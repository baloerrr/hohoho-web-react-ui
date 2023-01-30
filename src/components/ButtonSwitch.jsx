import React from 'react'
import PropTypes from 'prop-types'

import classes from '../styles/ButtonSwitch.css'

const ButtonSwitch = ({ onChange, isChecked, icon }) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={onChange} checked={isChecked} />
      <span className={classes.slider}></span>
      {isChecked ? (
        <icon.iconLeft className={classes.icon_left} />
      ) : (
        <icon.iconLeft className={classes.icon_right} />
      )}
    </label>
  )
}

ButtonSwitch.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  icon: PropTypes.object.isRequired,
}

export default ButtonSwitch
