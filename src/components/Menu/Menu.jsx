import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { useTranslation } from 'react-i18next'
import './Menu.css'
import logoMacs from '../../assets/logomacs.webp'
import logofuel from '../../assets/fuelpassion.webp'
import iconworld from '../../assets/iconLanguage.webp'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Menu () {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()
  const location = useLocation()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <div className={` ${location.pathname === '/' ? 'menu-itm-home' : 'menu-itm'}`}>
      <Container>
        <div className='d-flex justify-content-end pt-2'>
          <p className='text-light  m-0' style={{ textShadow: '4px 4px 4px black' }}>
            <span>CENTRO</span> <strong>CITIBANAMEX</strong>
            <br />2024
          </p>
        </div>
      </Container>
      <Navbar className='text-uppercase text-center' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logoMacs} width={160} alt='MACS' className='me-2' />
            <img src={logofuel} width={160} alt='MACS' />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas
            id='offcanvasMenuweb'
            aria-labelledby='offcanvasMenuweb'
            placement='end'
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose} />
            <Offcanvas.Body className='ms-auto'>
              <Nav className='align-items-center'>
                <Nav.Link href='#about-us' onClick={handleClose}>
                  {t('menu.option_1')}
                </Nav.Link>
                <Nav.Link href='#visitors' onClick={handleClose}>
                  {t('menu.option_3')}
                </Nav.Link>
                <Nav.Link href='#exhibitors' onClick={handleClose}>
                  {t('menu.option_2')}
                </Nav.Link>
                <Navbar.Text className='language-option'>
                  <img src={iconworld} width={19} height={19} alt='languages-world' />
                  <button onClick={() => i18n.changeLanguage('es')} style={{ color: i18n.language === 'en' ? 'white' : '' }}>Es</button>
                  /
                  <button onClick={() => i18n.changeLanguage('en')} style={{ color: i18n.language === 'es' ? 'white' : '' }}>En</button>
                </Navbar.Text>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
