import { Col, Container, Row } from 'react-bootstrap'
import logoigeco from '../../assets/logoIgeco.webp'
import logoMacs from '../../assets/logomacs.webp'
import './Footer.css'
export function Footer () {
  return (
    <footer>
      <Container className='pt-5 pb-5'>
        <Row>
          <Col md={6}>
            <p>
              <strong>Alfonso Ramírez</strong><br />
              Group Show Director<br />
              Tel. +52 (55) 7028 3335 ext. 808<br />
              alfonso.ramirez@hfmexico.mx
            </p>
          </Col>
          <Col md={6}>
            <p>
              <strong>Sergio López</strong><br />
              Sales Manager<br />
              Tel. +52 (55) 7028 3335 ext. 808<br />
              sergio.lopez@hfmexico.mx
            </p>
          </Col>
          <Col md={6}>
            <p>
              <strong>Exhibitor Contact</strong><br />
              WhatsApp: 55 8044 1281<br />
              expositores@macsexpo.mx
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={4} className='pt-3'>
            <img src={logoigeco} />
          </Col>
          <Col md={2} className='ms-auto pt-3'>
            <img src={logoMacs} />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
