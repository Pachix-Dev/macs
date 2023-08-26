import { Col, Container, Row } from 'react-bootstrap'
import bodygirlmain from '../../assets/bodygirlmain.webp'
import logoIgeco from '../../assets/logoIgeco.webp'
import logofuelcolor from '../../assets/fuelpassionColor.webp'
import bodygirl from '../../assets/bodygirl.webp'
import visitorimg from '../../assets/visitorimg.webp'
import exhibitorimg from '../../assets/exhibitorimgv2.webp'
import './Home.css'
import { loadSlim } from 'tsparticles-slim'
import { useCallback } from 'react'
import Particles from 'react-particles'
import { useTranslation } from 'react-i18next'
import logofuel from '../../assets/fuelpassion.webp'
export function Home () {
  const { t } = useTranslation()
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  return (
    <>
      <div className='home-wrapper-first d-grid align-items-center'>
        <img src={bodygirlmain} alt='macs body girl' className='bodygirlmain' />
        <Particles
          id='tsparticles'
          init={particlesInit}
          options={{
            background: {
              color: {
                value: 'transparent'
              }
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              }

            },
            particles: {
              color: {
                value: '#ffffff'
              },

              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 80
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 5 }
              }
            },
            detectRetina: true,
            style: {
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: 3
            }
          }}
        />
        <Container>
          <Row>
            <Col md={5} className='home-text-fisrt'>
              <h1 className='text-light fs-3'>
                {t('home.start')}
              </h1>
              <h3 className='mt-5 text-light'>
                <span>CENTRO</span><strong> CITIBANAMEX<br />2024</strong>
              </h3>
              <img src={logofuel} width={300} alt='MACS' />
            </Col>
          </Row>
        </Container>
        <Container>
          <img src={logoIgeco} width={300} className='logoIgeco' />
        </Container>
      </div>
      <Container className='mt-5 home-fuel-wrapper' id='about-us'>
        <p className='text-center'>
          <img src={logofuelcolor} width={400} />
        </p>
        <img src='/macs/macsbg.webp' className='w-100 mt-5 position-relative' />
        <Row className='home-bodygirl-info'>
          <Col md={6}>
            <img src={bodygirl} alt='macs body girl' className='w-100' />
          </Col>
          <Col md={6} className='my-auto'>
            <p dangerouslySetInnerHTML={{ __html: t('home.full_your_passion') }} />
          </Col>
        </Row>
      </Container>
      <div className='home-activities mt-5 text-center'>
        <div className='bg-title'>
          <h1>{t('home.activities')}</h1>
        </div>
        <div className='home-activities-wrapper'>
          <div className='position-relative'>
            <img src='/macs/actividades1.webp' alt='fisicoconstructivismo' draggable='false' />
            <p>{t('home.activity_1')} </p>
          </div>
          <div className='position-relative'>
            <img src='/macs/actividades2.webp' alt='fisicoconstructivismo' draggable='false' />
            <p>
              {t('home.activity_2')}
            </p>
          </div>
          <div className='position-relative'>
            <img src='/macs/actividades3.webp' alt='fisicoconstructivismo' draggable='false' />
            <p>
              {t('home.activity_3')}
            </p>
          </div>
          <div className='position-relative'>
            <img src='/macs/actividades4.webp' alt='fisicoconstructivismo' draggable='false' />
            <p>
              {t('home.activity_4')}
            </p>
          </div>
          <div className='position-relative'>
            <img src='/macs/actividades5.webp' alt='fisicoconstructivismo' draggable='false' />
            <p>
              {t('home.activity_5')}
            </p>
          </div>
        </div>
      </div>
      <Container id='visitors'>
        <Row>
          <Col md={{ order: 1, span: 6 }} xs={{ order: 2 }} className='my-auto'>
            <p className='title_visitor'>
              {t('home.visitors')}
            </p>
            <p className='text_visitor'>
              {t('home.visitors_text')}
            </p>
          </Col>
          <Col md={6} xs={{ order: 1 }} className='visitor-bg'>
            <img src={visitorimg} className='w-100' />
          </Col>
        </Row>
      </Container>
      <Row className='m-0 bg-exhibitors' id='exhibitors'>
        <Col md={3}>
          <img src={exhibitorimg} className='w-100' />
        </Col>
        <Col md={6} className='my-auto'>
          <p className='title_exhibitor'>
            {t('home.exhibitors')}
          </p>
          <p className='text_exhibitor'>
            {t('home.exhibitors_text')}
          </p>
        </Col>
      </Row>
      <div className='home-contact-wrapper'>
        <Container>
          <h1>{t('home.contact')}</h1>
        </Container>
      </div>
    </>
  )
}
