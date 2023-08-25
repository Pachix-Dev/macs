import { Suspense, lazy, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
const ReCAPTCHA = lazy(() => import('react-google-recaptcha'))

export function ContactForm () {
  const { t } = useTranslation()
  const captchaRef = useRef()
  const [captcha, setCaptcha] = useState(false)
  const [message, setMessage] = useState()
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
        body: JSON.stringify({ token, formData })
      }
      try {
        const res = await fetch(
          'https://industrialtransformation.mx/newsletter/contact.php',
          requestOptions
        )
        const data = await res.json()
        if (data.status) {
          setMessage('Message send successfully!!')
        } else {
          setMessage('Sorry we couldn\'t verify you are not robot try again...')
        }
      } catch (error) {
        console.log(error)
      }
      document.getElementById('form-newsletter').reset()
    }
  }
  return (
    <div className='home-contact-wrapper pt-5 pb-5' id='contact'>
      <Container>
        <h1>{t('home.contact')}</h1>
        <Row>
          <Col md={6}>
            <Form id='form-newsletter' onSubmit={handleSubmit}>
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
                  sitekey='6LdUjjonAAAAADb5Z9eAiGXqMdmc6aUM8ZLzYjBg'
                  ref={captchaRef}
                  onChange={onChange}
                />
              </Suspense>
              {captcha ? '' : <div style={{ color: '#dc3545' }}>{message}</div>}
              <Button type='submit' className='mt-3'>
                {t('home.send')}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
