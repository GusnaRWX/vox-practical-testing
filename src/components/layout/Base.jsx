import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import PropTypes from 'prop-types'

function Base ({
  children
}) {
  return (
    <>
      <Nav />
      <main className='base'>
        {children}
      </main>
      <Footer />
    </>
  )
}

Base.propTypes = {
  children: PropTypes.node
}

export default Base
