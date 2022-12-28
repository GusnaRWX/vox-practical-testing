import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

function IconButton ({
  size,
  src,
  classes,
  onClick,
  ...others
}) {
  return (
    <button
      className='icon-button'
      onClick={onClick}
      {...others}
    >
      <Icon
        src={src}
        size={size}
      />
    </button>
  )
}

IconButton.propTypes = {
  size: PropTypes.any,
  src: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func
}

export default IconButton
