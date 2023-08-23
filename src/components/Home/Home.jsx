import { Container } from 'react-bootstrap'
import bodygirl from '../../assets/bodygirlmain.webp'
import './Home.css'
export function Home () {
  return (
    <>
      <div className='home-wrapper-first d-flex align-items-center'>
        <img src={bodygirl} alt='macs body girl' className='bodygirlmain' />
        <Container>
          <h1 className='text-light fw-bold'>START</h1>
          <p className='text-light fw-bold ps-4'>
            + FACTSHEET<br />
            + PLANO<br />
            + CONTÁCTANOS<br />
          </p>
        </Container>
      </div>
    </>
  )
}
