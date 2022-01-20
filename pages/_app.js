import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@fontsource/poppins'
//import theme from 'styles/theme'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider /*theme={theme}*/>
			<Component {...pageProps} />
			<ToastContainer />
		</ChakraProvider>
	)
}
export default MyApp
