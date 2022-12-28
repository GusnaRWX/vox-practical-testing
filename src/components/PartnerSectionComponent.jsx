import React from 'react'
import PropTypes from 'prop-types'
import IconButton from './_shared/IconButton'
import { CHEVRON_LEFT, CHEVRON_RIGHT } from 'utils/iconConstant'
import Button from './_shared/Button'

function PartnerSectionComponent ({
  data
}) {
  return (
    <div className='home-partner-wrapper'>
      <div className='home-partner-left'>
        <h4 className='mb-1'>SEE WHO WE ARE</h4>
        <h2 className='mb-1'>OUR PARTNERS</h2>
        <div className='flex flex-row align-items-center justify-content-start mb-1' style={{ gap: '10px' }}>
          <IconButton
            src={CHEVRON_LEFT}
            size={20}
          />
          <IconButton
            src={CHEVRON_RIGHT}
            size={20}
          />
        </div>
        <div style={{ width: '200px', marginBottom: '1rem' }}>
          <Button
            type='button'
            variant='primary'
            size='sm'
            text='SEE OUR PARTNER'
          />
        </div>
      </div>
      <div className='home-partner-right'>
        <div
          className='home-partner-img'
          style={{
            backgroundImage: `url('/images/home-decore.jpeg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#fff'
          }}
        >
        </div>
        <div
          className='home-partner-img'
          style={{
            backgroundImage: `url('/images/diesel-denim.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#fff'
          }}
        >
        </div>
        <div
          className='home-partner-img'
          style={{
            backgroundImage: `url('/images/zara-2.png')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: '#fff'
          }}
        >
        </div>
      </div>
    </div>
  )
}

PartnerSectionComponent.propTypes = {
  data: PropTypes.func
}

export default PartnerSectionComponent
