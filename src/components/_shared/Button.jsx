/* eslint-disable no-useless-concat */
import React from 'react'
import PropTypes from 'prop-types'

function Button ({
  text,
  type,
  size,
  variant,
  classes,
  ...others
}) {
  return (
    <button
      className={
        `button ${'button-' + (variant || 'primary') + ' ' + 'button-' + (size || 'medium') + ' ' + (classes || '')}`
      }
      {...(type && { type: type })}
      {...others}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  classes: PropTypes.string
}

export default Button
