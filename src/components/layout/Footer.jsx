import React, { useState } from 'react'
import Button from 'components/_shared/Button'
import {
  PINTEREST_ICON,
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  BLOGGER_ICON,
  LOCATION,
  PHONE
} from 'utils/iconConstant'
import Icon from 'components/_shared/Icon'
import Textfield from 'components/_shared/Textfield'

function Footer () {
  const [initialValue, setInitialValue] = useState('')
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-newsletter mb-1'>
          <h5 className='mb-1'>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <div className='flex flex-row align-items-center justify-content-start' style={{ gap: '.5rem' }}>
            <Textfield
              type='text'
              name='initialValue'
              value={initialValue}
              placeholder='YOUR E-MAIL'
              onChange={(e) => { setInitialValue(e.target.value) }}
            />
            <Button
              size='sm'
              variant='grey'
              text='SUBSCRIBE'
              type='button'
              style={{
                padding: '.65rem'
              }}
            />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, tempora vero quam iste facere illo corrupti, labore quo perfer</p>
        </div>
        <div className='footer-social-media mb-1'>
          <h5 className='mb-1'>FOLLOW US</h5>
          <div className='flex flex-row align-items-center justify-content-start' style={{ gap: '6px' }}>
            <Icon
              src={PINTEREST_ICON}
              size={25}
            />
            <Icon
              src={FACEBOOK_ICON}
              size={25}
            />
            <Icon
              src={INSTAGRAM_ICON}
              size={31}
            />
            <Icon
              src={BLOGGER_ICON}
              size={36}
            />
          </div>
        </div>
        <div className='footer-contact-us mb-1'>
          <h5 className='mb-1'>CONTACT US</h5>
          <div className='flex flex-row align-items-start justify-content-start' style={{ gap: '1rem' }}>
            <Icon
              src={LOCATION}
            />
            <div>
              <p>Rue De la loi/Wetstraat 175</p>
              <p>B-1048 Bruxelles/Brussel</p>
              <p>Belgique/Belgie</p>
            </div>
          </div>
          <div className='flex flex-row align-items-center justify-content-start' style={{ gap: '1rem' }}>
            <Icon
              src={PHONE}
            />
            <p>Tel: +32 22252522</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
