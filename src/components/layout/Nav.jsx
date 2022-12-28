import React, { useState, useRef } from 'react'
import Icon from 'components/_shared/Icon'
import { CHEVRON_RIGHT, MENU, CLOSE_ICON } from 'utils/iconConstant'
import Button from 'components/_shared/Button'
import IconButton from 'components/_shared/IconButton'
import { useClickAwayListener } from 'hooks/index'

function Nav () {
  const drawerRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(false)
  const [label, setLabel] = useState('EN')
  const languageItem = [
    {
      value: 'EN',
      text: 'EN - English'
    },
    {
      value: 'FR',
      text: 'RF - France'
    }
  ]

  const handleSetLanguage = (val) => {
    setLabel(val)
    setLang(false)
  }
  const handleCloseNav = () => {
    setOpen(false)
  }
  useClickAwayListener(drawerRef, handleCloseNav)
  return (
    <>
      <nav
        className='nav'
        ref={drawerRef}
      >
        <div className='nav-website block-none-sm full-width'>
          <div className='flex flex-row flex-nowrap justify-content-between align-items-center full-width'>
            <div style={{
              marginRight: '1rem'
            }}>
              <img className='nav-logo' src='/images/donaki-logo-positive.svg' alt='' />
            </div>
            <div className='flex flex-row flex-nowrap justify-content-center align-items-center' style={{ gap: '3rem', marginTop: '24px' }}>
              <div className='nav-item'>
                <span>HOME</span>
              </div>
              <div className='nav-item nav-link'>
                <span>LINK</span>
                <Icon
                  src={CHEVRON_RIGHT}
                  size={12}
                />
              </div>
              <div className='nav-item nav-link'>
                <span>LINK</span>
                <Icon
                  src={CHEVRON_RIGHT}
                  size={12}
                />
              </div>
              <div className='nav-item'>
                <span>CONTACT US</span>
              </div>
            </div>
            <div className='nav-right-wrapper'>
              <div className='flex flex-row flex-nowrap justify-content-end align-items-center' style={{ gap: '6px' }}>
                <div className='nav-item' onClick={() => setLang(true)}>
                  <span>{label}</span>
                </div>
                <Icon
                  src={CHEVRON_RIGHT}
                  size={11}
                />
                <div className={lang ? 'nav-language active' : 'nav-language'}>
                  {
                    languageItem.map((item, index) => (
                      <div className='mb-1' key={index} style={{ cursor: 'pointer' }} onClick={() => handleSetLanguage(item.value)}>
                        {item.text}
                      </div>
                    ))
                  }
                </div>
              </div>
              <div
                className='nav-auth-wrapper'
              >
                <Button
                  variant='secondary'
                  text='LOGIN'
                  type='button'
                  size='sm'
                />
                <Button
                  text='REGISTER'
                  type='button'
                  size='sm'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='nav-mobile block-sm full-width'>
          <div className='flex flex-row flex-nowrap align-items-center justify-content-between'>
            <div style={{
              marginRight: '1rem'
            }}>
              <img className='nav-logo' src='/images/donaki-logo-positive.svg' alt='' />
            </div>
            <div className='nav-right-wrapper'>
              <div className='nav-item' onClick={() => setLang(true)}>
                <span style={{ marginRight: '.5rem' }}>{label}</span>
                <Icon
                  src={CHEVRON_RIGHT}
                  size={11}
                />
              </div>
              <div className={lang ? 'nav-language active' : 'nav-language'}>
                {
                  languageItem.map((item, index) => (
                    <div className='mb-1' key={index} style={{ cursor: 'pointer' }} onClick={() => handleSetLanguage(item.value)}>
                      {item.text}
                    </div>
                  ))
                }
              </div>
              {
                !open && (
                  <IconButton
                    src={MENU}
                    size={30}
                    onClick={() => setOpen(true)}
                  />
                )
              }
              {
                open && (
                  <IconButton
                    src={CLOSE_ICON}
                    size={30}
                    onClick={() => setOpen(false)}
                  />
                )
              }
            </div>
          </div>
          <div className={open ? 'nav-drawer active' : 'nav-drawer'}>
            <div className={open ? 'nav-drawer-item active mt-1' : 'nav-drawer-item mt-1'}>
              <span>HOME</span>
            </div>
            <div
              className={open ? 'flex flex-row align-items-center justify-content-between nav-drawer-item active' : 'flex flex-row align-items-center justify-content-between nav-drawer-item'}>
              <div className='nav-item'>
                <span>LINK</span>
              </div>
              <Icon
                src={CHEVRON_RIGHT}
                size={11}
              />
            </div>
            <div
              className={open ? 'flex flex-row align-items-center justify-content-between nav-drawer-item active' : 'flex flex-row align-items-center justify-content-between nav-drawer-item'}>
              <div className='nav-item'>
                <span>LINK</span>
              </div>
              <Icon
                src={CHEVRON_RIGHT}
                size={11}
              />
            </div>
            <div className={open ? 'nav-drawer-item active' : 'nav-drawer-item'}>
              <span>CONTACT US</span>
            </div>
            <Button
              variant='secondary'
              text='LOGIN'
              type='button'
              size='sm'
              classes={open ? 'nav-drawer-item active' : 'nav-drawer-item'}
            />
            <Button
              text='REGISTER'
              type='button'
              size='sm'
              classes={open ? 'nav-drawer-item active' : 'nav-drawer-item'}
            />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
