import { Col, Container, Row } from 'react-bootstrap'
import bodygirlmain from '../../assets/bodygirlmain.webp'
import logoIgeco from '../../assets/logoIgeco.webp'
import logofuelcolor from '../../assets/fuelpassioncolor.webp'
import bodygirl from '../../assets/bodygirl.webp'

import './Home.css'
import { loadSlim } from 'tsparticles-slim'
import { useCallback } from 'react'
import Particles from 'react-particles'
import { Link } from 'react-router-dom'
export function Home () {
  const particlesInit = useCallback(async engine => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadFull(engine);
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <>
      <div className='home-wrapper-first d-grid align-items-center'>
        <img src={bodygirlmain} alt='macs body girl' className='bodygirlmain' />
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
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
          <div className='home-text-fisrt'>
            <h1 className='text-light fw-bold'>START</h1>
            <p className='text-light fw-bold ps-4'>
              <a href='/' target='_blank'>+ FACTSHEET</a><br />
              <a href='/' target='_blank'>+ PLANO </a><br />
              <Link to='contact'>+ CONTÁCTANOS </Link><br />
            </p>
          </div>
        </Container>
        <Container>
          <img src={logoIgeco} width={300} className='logoIgeco' />
        </Container>
      </div>
      <Container className='mt-5'>
        <p className='text-center'>
          <img src={logofuelcolor} width={400} />
        </p>
        <img src='/macsbg.webp' className='w-100 mt-5 position-relative' style={{ bottom: '-300px', zIndex: -1 }} />
        <Row>
          <Col md={6}>
            <img src={bodygirl} alt='macs body girl' className='w-100' />
          </Col>
          <Col md={6} className='my-auto'>
            <p>
              Únete a nosotros en el camino a potenciar el  Fitness, Wellness, los Deportes y la Nutrición, en la feria que reúne productos y actividades exclusivas de las marcas líderes del sector, conferencias, talleres, masterclasses especializadas, concursos y activaciones físicas.<br /><br />

              Somos la única expo de deportes en México con el respaldo de dos de los organizadores líderes de ferias en Europa: Italian Exhibition Group e Deutsche Messe.
            </p>
          </Col>
        </Row>
        <img src='/macsbg.webp' className='w-100 mt-5 position-relative' style={{ top: '-400px', zIndex: -1 }} />
      </Container>
      <div className='home-activities mt-5 text-center'>
        <div className='bg-title'>
          <h1>ACTIVIDADES Y EVENTOS</h1>
        </div>
        <div className='home-activities-wrapper'>
          <div className='position-relative'>
            <img src='/actividades1.webp' alt='fisicoconstructivismo' draggable='false' />
            <p>CONCURSO DE FISICOCONTRUCTIVISMO </p>
          </div>
          <div className='position-relative'>
            <img src='/actividades2.webp' alt='fisicoconstructivismo' draggable='false' />
            <p>
              ACTIVACIÓN DE CROSSTRAING Y ZUMBA
            </p>
          </div>
          <div className='position-relative'>
            <img src='/actividades3.webp' alt='fisicoconstructivismo' draggable='false' />
          </div>
          <div className='position-relative'>
            <img src='/actividades4.webp' alt='fisicoconstructivismo' draggable='false' />
          </div>
          <div className='position-relative'>
            <img src='/actividades5.webp' alt='fisicoconstructivismo' draggable='false' />
          </div>
        </div>
      </div>
    </>
  )
}
