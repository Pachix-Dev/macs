import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Home } from './components/Home/Home'
import { useTranslation } from 'react-i18next'
import { Menu } from './components/Menu/Menu'
import './assets/fonts/BebasNeueCyrillic.ttf'
import './assets/fonts/BebasNeueCyrillic.eot'
import './assets/fonts/BebasNeueCyrillic.woff'
import './assets/fonts/BebasNeueCyrillic.woff2'
import { useEffect, useRef } from 'react'

function App () {
  const { t } = useTranslation()
  const divRef = useRef(null)

  const updateDivHeight = () => {
    const totalBodyHeight = document.body.scrollHeight
    if (divRef.current) {
      divRef.current.style.height = `${totalBodyHeight}px`
    }
  }

  useEffect(() => {
    updateDivHeight()
    window.addEventListener('scroll', updateDivHeight)
    return () => {
      window.removeEventListener('scroll', updateDivHeight)
    }
  }, [])

  return (
    <>
      <div className='bgpapel' ref={divRef} />
      <Menu />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Helmet>
                <title>MACS | Home</title>
                <meta name='description' content={t('seo.description')} />
              </Helmet>
              <Home />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
