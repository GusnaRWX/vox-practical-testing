import React from 'react'
import PropTypes from 'prop-types'
import Button from './_shared/Button'

function HeroComponent (data) {
  return (
    <div className='home-hero'
      style={{
        backgroundImage: `url('/images/who-are-we.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='home-hero-wrapper' style={{ color: '#000000' }}>
        <div className='mb-1 headline-1'>WHO ARE WE ?</div>
        <p className='mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum odit commodi, molestias laboriosam rerum aut. Vel blanditiis a
          quas deleniti. Laudantium perspiciatis fugiat optio consequuntur velit ratione eum? Reprehenderit.</p>
        <div style={{
          width: '250px'
        }}>
          <Button
            size='sm'
            type='button'
            text='FIND MORE'
          />
        </div>
      </div>
    </div>
  )
}

HeroComponent.propTypes = {
  data: PropTypes.any
}

export default HeroComponent
