import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'

import 'configs/styles'

import { Loader } from 'components'
import SocialMeProvider from 'contexts/SocialMe/Provider'
import AuthProvider from 'contexts/Auth/Provider'
import Theme from 'infrastructure/Theme'

import theme from 'styles/theme'

function MyApp({ Component, pageProps }) {
  const [loadingRoutes, setLoadingRoutes] = useState(true)
  const { isReady } = useRouter()

  useEffect(() => {
    if (isReady) setLoadingRoutes(false)
  }, [isReady])

  return (
    <Theme theme={theme}>
      {loadingRoutes ? (
        <Loader text="Carregando" height="100vh" />
      ) : (
        <SocialMeProvider>
          <AuthProvider>
            <Component {...pageProps} />

            <ToastContainer
              position="top-center"
              autoClose={2000}
              pauseOnHover={false}
            />
          </AuthProvider>
        </SocialMeProvider>
      )}
    </Theme>
  )
}
export default MyApp
