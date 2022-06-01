import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react'
import '@fontsource/poppins'

import theme from 'styles/theme'

export const parameters = {
	nextRouter: {
		Provider: RouterContext.Provider,
		path: '/',
		asPath: '/',
		query: {},
		push() {}
	}
}

export const decorators = [
	(Story) => (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Box m={4}>
				<Story />
			</Box>
		</ChakraProvider>
	)
]
