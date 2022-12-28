import React from 'react'
import PropTypes from 'prop-types'
import Button from './_shared/Button'

function BecameSectionComponent ({
  data
}) {
  return (
    <div className='home-become-wrapper'>
      <div className='home-become-section1'>
        <h4>BECOME A PARTNER</h4>
        <p>Promote your store through our platform</p>
        <div style={{ width: '200px' }}>
          <Button
            variant='white'
            size='sm'
            text='FIND OUT MORE'
            type='button'
          />
        </div>
      </div>
      <div className='home-become-section2'>
        <h4>BECOME A MEMBER</h4>
        <p>Browse through a large number of retailers</p>
        <div style={{ width: '200px' }}>
          <Button
            variant='white'
            size='sm'
            text='FIND OUT MORE'
            type='button'
          />
        </div>
      </div>
    </div>
  )
}

BecameSectionComponent.propTypes = {
  data: PropTypes.any
}

export default BecameSectionComponent
