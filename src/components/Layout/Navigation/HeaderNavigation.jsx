import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import PropTypes from 'prop-types'

const HeaderNavigation = ({ onToogleNav, widthScreen }) => {
  return (
    <section className="flex flex-row justify-between text-center pt-6 pb-8 md:justify-center">
      <div className="flex flex-row items-center">
        <img src="" alt="" className="w-full max-w-[38px]" />
        <span className="font-bold text-xl ml-2 whitespace-nowrap text-primary">
          {' '}
          Hoh😐ho
        </span>
      </div>
      {widthScreen < 768 && (
        <AiOutlineMenu
          size={20}
          className="cursor-pointer"
          onClick={onToogleNav}
        />
      )}
    </section>
  )
}

HeaderNavigation.propTypes = {
  onToggleNav: PropTypes.func,
  widthScreen: PropTypes.number.isRequired,
}

export default HeaderNavigation
