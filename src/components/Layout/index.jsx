import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <main className="w-full p-5 pt-20 h-[100vh] overflow-y-scroll scrollbar-hide md:px-10 md:py-5 bg-light-secondary dark:bg-dark-secondary text-dark-gray dark:text-white">
        {children}
      </main> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
