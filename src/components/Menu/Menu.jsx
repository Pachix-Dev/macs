import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
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
          <p className='text-light m-0'>
            <span className=' fw-light'>CENTRO</span> <strong>CITIBANAMEX</strong>
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
                <NavDropdown title={t('menu.about_us')} renderMenuOnMount disabled>
                  <NavDropdown.Item as={Link} to='/about-us' onClick={handleClose}>{t('menu.about_1')}</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/background' onClick={handleClose}>{t('menu.about_2')}</NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='key-audience-groups'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_8')}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/contact' onClick={handleClose}>{t('menu.exhibitors_1')}</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t('menu.exhibitors')} renderMenuOnMount disabled>
                  <NavDropdown.Item
                    as={Link}
                    to='/why-exibit'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/Empresas ITM2023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_2_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='products-category'
                    onClick={handleClose}
                  >{t('menu.exhibitors_9')}
                  </NavDropdown.Item>

                  {/* <NavDropdown.Item as={Link} to='/exibitor-profile' onClick={handleClose}>{t('menu.exhibitors_3')}</NavDropdown.Item> */}

                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/Factsheet_ITM2023_ENG_compressed_v3.pdf'
                      : '/files/Factsheet_ITM2023_ESP_compressed_V3.pdf'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_4')}

                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/MANUAL_ITM_INGLES_23_08_01.pdf'
                      : '/files/MANUAL_ITM_23_08_01.pdf'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_4_1')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href='/files/Floorplan-ITM-2023-18-08-2023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_5')}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href='/files/CONTRACT-ITM-2023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_6')}
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <p className='mt-2 p-2 mb-0'>{t('menu.exhibitors_7')}</p>
                  <NavDropdown.Item
                    href={i18n.language === 'en'
                      ? '/files/SPONSORSHIPS-2023-ITM-ENG.pdf'
                      : '/files/PATRICINIOS 2023 ITM ESP.pdf'}
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_7_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/Patrocinio Keynote ITM 2023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_7_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/Patrocinio Transformation ITM 2023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_7_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/Patrocinios Noche de Industriales ITM 2023vf.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_7_4')}
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href='https://cuatro-cero.mx/' target='_blank' onClick={handleClose}>Cuatro Cero</Nav.Link>
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
