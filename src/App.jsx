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

function App () {
  const { t } = useTranslation()
  return (
    <>
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
