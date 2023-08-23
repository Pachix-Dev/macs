import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Home } from './components/Home/Home'
import { useTranslation } from 'react-i18next'
import { Menu } from './components/Menu/Menu'

function App () {
  const { t } = useTranslation()
  return (
    <>
      <img src='/bgpapel.webp' alt='bg-papel' className='bgpapel' draggable='false' />
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
