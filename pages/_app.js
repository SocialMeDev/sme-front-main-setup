import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import '@fontsource/poppins'
import '@fontsource/roboto'
//import theme from 'styles/theme'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider /*theme={theme}*/>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        pauseOnHover={false}
      />
    </ChakraProvider>
  )
}
export default App
