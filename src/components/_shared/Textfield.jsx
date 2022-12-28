import React from 'react'
import PropTypes from 'prop-types'

function Textfield ({
  name,
  value,
  type,
  classes,
  sx,
  label,
  fullWidth,
  error,
  topComponent,
  bottomComponent,
  hint,
  onChange = () => { },
  ...others
}) {
  return (
    <div className='form-group'>
      {
        topComponent && (
          <div className='flex justify-content-between align-items-center'>
            <label htmlFor={`textfield-${name}`} className={'label ' + (error ? 'label-error' : '')}>{label}</label>
            {topComponent}
          </div>
        )
      }

      {
        !topComponent && (
          <label htmlFor={`textfield-${name}`} className={'label ' + (error ? 'label-error' : '')}>{label}</label>
        )
      }

      <input
        className={
          classes
            ? `textfield ${classes + ' ' + (fullWidth ? 'full-width ' : ' ') + (error ? 'textfield-error' : '')}`
            : `textfield ${(fullWidth ? 'full-width ' : ' ') + (error ? 'textfield-error' : '')}`
        }
        id={`textfield-${name}`}
        type={type || 'text'}
        name={name}
        value={value || ''}
        {...others}
        onChange={onChange}
        {...(sx && { style: sx })}
      />
      {
        bottomComponent && (
          <div className='flex flex-row-reverse justify-content-between align-items-center'>
            {bottomComponent}
            {
              hint && (
                <span className='hint-message'>{hint}</span>
              )
            }
            {
              error && (
                <span className='error-message fs-8'>{error}</span>
              )
            }
          </div>
        )
      }
      {
        !bottomComponent && (
          <>
            {
              hint && (
                <span className='hint-message'>{hint}</span>
              )
            }
            {
              error && (
                <span className='error-message fs-8'>{error}</span>
              )
            }
          </>
        )
      }
    </div>
  )
}

Textfield.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  type: PropTypes.any,
  classes: PropTypes.string,
  sx: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  fullWidth: PropTypes.bool,
  error: PropTypes.any,
  hint: PropTypes.any,
  topComponent: PropTypes.node,
  bottomComponent: PropTypes.node,
  onChange: PropTypes.func
}

export default Textfield