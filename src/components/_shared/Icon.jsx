import React from 'react'
import PropTypes from 'prop-types'

function Icon ({
  src,
  size,
  ...others
}) {
  return (
    <img
      src={src}
      alt=''
      style={{
        width: (size || 16) + 'px',
        height: 'auto'
      }}
      {...others}
    />
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number
}

export default Icon
