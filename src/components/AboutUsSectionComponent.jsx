import React from 'react'
import PropTypes from 'prop-types'

function AboutUsSectionComponent ({
  data
}) {
  return (
    <div className='home-aboutus'
      style={{
        backgroundImage: `url('/images/about-us.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className='flex flex-column home-aboutus-content'>
        <div className='mb-2 headline-1'>ABOUT US</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque praesentium perspiciatis ab quo temporibus. Velit obcaecati ea,
          adipisci facere eos laboriosam! Itaque, optio. Repellat accusamus doloremque tempora ipsam delectus.</p>
      </div>
    </div>
  )
}

AboutUsSectionComponent.propTypes = {
  data: PropTypes.func
}

export default AboutUsSectionComponent
