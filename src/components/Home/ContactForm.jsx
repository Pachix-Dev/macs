import { Suspense, lazy, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
const ReCAPTCHA = lazy(() => import('react-google-recaptcha'))

export function ContactForm () {
  const { t } = useTranslation()
  const captchaRef = useRef()
  const [captcha, setCaptcha] = useState(false)
  const [message, setMessage] = useState()
  const [sendStatus, setSendStatus] = useState(false)
  const onChange = () => {
    setCaptcha(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (captcha === false) {
      event.stopPropagation()
      setMessage('Please verify you are not bot.')
    } else {
      const token = captchaRef.current.getValue()
      captchaRef.current.reset()
      setCaptcha(false)
      const formData = Object.fromEntries(new window.FormData(event.target))

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      }

      const requestOptions2 = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData })
      }
      try {
        setSendStatus(true)
        const res = await fetch(
          'https://hfmexico.mx/foro-electromovilidad/backend/verifyMacs.php',
          requestOptions
        )
        const data = await res.json()
        if (data.success) {
          const statusEmail = await fetch('https://hfmexico.mx/foro-electromovilidad/backend/email/send-email3', requestOptions2)
          const dataEmail = await statusEmail.json()
          if (dataEmail.status) {
            setSendStatus(false)
            setMessage('¡Gracias por contactarnos! En breve nos pondremos en contacto contigo.')
          } else {
            setSendStatus(false)
            setMessage('Lo sentimos en este momento no es posible enviar tu información...')
          }
        } else {
          setSendStatus(false)
          setMessage('Lo sentimos no pudimos comprobar que no eres un robot...')
        }
      } catch (error) {
        console.log(error)
        setSendStatus(false)
        setMessage('Lo sentimos en este momento no es posible enviar tu información...')
      }
      document.getElementById('form-contact').reset()
    }
  }
  return (
    <div className='pt-5 pb-5' id='contact'>
      <Container>
        <Row>
          <Col md={6}>
            <Form id='form-contact' onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>{t('home.name')}</Form.Label>
                <Form.Control type='text' name='name' required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>{t('home.email')}</Form.Label>
                <Form.Control type='email' name='email' required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasiSubject'>
                <Form.Label>{t('home.subject')}</Form.Label>
                <Form.Control type='text' name='subject' required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicMessage'>
                <Form.Label>{t('home.message')}</Form.Label>
                <Form.Control type='text-area' name='message' required />
              </Form.Group>
              <Suspense fallback={<div>Loading reCAPTCHA...</div>}>
                <ReCAPTCHA
                  sitekey='6LeljqwnAAAAAHcToBhu6iq8o4kahL9sopQjC1A3'
                  ref={captchaRef}
                  onChange={onChange}
                />
              </Suspense>
              {captcha ? '' : <div style={{ color: 'white' }}>{message}</div>}
              <Button type='submit' className='mt-3'>
                {sendStatus
                  ? <><Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' /><span> Loading...</span></>
                  : t('home.send')}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
