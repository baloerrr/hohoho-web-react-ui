import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import ButtonSwitch from './ButtonSwitch'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'

const Header = () => {
  const themeCtx = useContext(ThemeContext)
  const themeIsChecked = useRef(themeCtx.currentTheme === 'dark' ? true : false)
  const switchThemeHandler = (e) => {
    const value = e.target.checked
    themeIsChecked.current = value
    console.log(value)
    themeCtx.changeTheme(value ? 'dark' : 'light')
  }

  return (
    <div className="header">
      <div className="navbar bg-base-100  transition-all">
        <div className="flex-1 drop-shadow-sm">
          <h1 className="btn btn-ghost normal-case text-2xl text-primary font-black">
            Hoh😐ho
          </h1>
        </div>
        <div className="flex-none">
          <ButtonSwitch
            onChange={switchThemeHandler}
            isChecked={themeIsChecked.current}
            icon={{
              iconLeft: MdOutlineLightMode,
              iconRight: MdOutlineNightlight,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
